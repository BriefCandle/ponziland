// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import {Tile, TileData} from "@/codegen/tables/Tile.sol";

uint32 constant WIDTH = 64;
uint32 constant HEIGHT = 64;
uint128 constant TAX_RATE = 1 ether;

library TileLogic {
  function _stake(uint64 xy, uint256 amount) internal {
    Tile.setAmount(xy, amount);
  }

  function _purchase(uint64 xy, uint256 price, uint256 amount) internal {
    _claimTax(xy);
    _payTaxes(xy);

    // TODO!!! require amount to be higher than price 
    // TODO!!! send original owner the remaining amount on the tile
    Tile.setAmount(xy, amount);
    Tile.setPrice(xy, price);
  }

  // claim tax from 8 near tiles; if a near tile has no enough amount to cover
  // tax, then remove its owner and get remaining amount
  function _claimTax(uint64 xy) internal returns (uint256 total) {
    uint64[8] memory nearTiles = getNearTiles(xy);
    TileData memory tileData = Tile.get(xy);
    
    for (uint i = 0; i < 8; i++) {
      uint64 nearTile = nearTiles[i];
      if (nearTile == 0 || Tile.getOwner(nearTile) == 0) continue;

      uint256 amount = (block.timestamp - tileData.lastUpdated) * 
        TAX_RATE * Tile.getPrice(nearTile);
      uint256 currAmount = Tile.getAmount(nearTile);
      if (amount > currAmount) {
        // TODO: liquidate / removeTile
        Tile.deleteRecord(nearTile);
        amount = currAmount;
      } else {
        Tile.setAmount(nearTile, currAmount - amount);
      }
      
      total = total + amount;
    }

    Tile.setLastUpdated(xy, uint40(block.timestamp));
    Tile.setAmount(xy, tileData.amount + total);
  }

  // calculate taxes owed to 8 near tiles; if below center tile's own amount by 10%, 
  // liquidate and award it to liquidator
  function _liquidateTile(uint64 xy, bytes32 liquidator) internal {
    uint64[8] memory nearTiles = getNearTiles(xy);
    TileData memory tileData = Tile.get(xy);

    _claimTax(xy);

    uint256 total = 0;
    for (uint i = 0; i < 8; i++) {
      uint64 nearTile = nearTiles[i]; 
      if (nearTile == 0 || Tile.getOwner(nearTile) == 0) continue;

      uint256 amount = (block.timestamp - Tile.getLastUpdated(nearTile)) * 
        TAX_RATE * tileData.price;
      total = total + amount;
    }

    if (total * 100 / 90 <= tileData.amount) revert("still have enough amount");
    
    Tile.deleteRecord(xy);
    // TODO: award liquidator the total
  }

  // pay all taxes to 8 near tiles and update center tile's price;
  function _setPrice(uint64 xy, uint256 price) internal {
    _payTaxes(xy);

    Tile.setPrice(xy, price);
  }

  // pay taxes from xy to all 8 near tiles; revert if not enough amount
  function _payTaxes(uint64 xy) private {
    uint64[8] memory nearTiles = getNearTiles(xy);
    TileData memory tileData = Tile.get(xy);

    uint256 nextAmount = tileData.amount;
    for (uint i = 0; i < 8; i++) {
      uint64 nearTile = nearTiles[i]; 
      if (nearTile == 0 || Tile.getOwner(nearTile) == 0) continue;

      uint256 amount = (block.timestamp - Tile.getLastUpdated(nearTile)) * 
        TAX_RATE * tileData.price;
      
      if (nextAmount < amount) revert("not enough amount to pay tax");
      nextAmount = nextAmount - amount;
      Tile.setAmount(nearTile, Tile.getAmount(nearTile) + amount);
      Tile.setLastUpdated(nearTile, uint40(block.timestamp));
    }

    Tile.setAmount(xy, nextAmount);
  }

  function getNearTiles(uint64 xy) internal pure returns (uint64[8] memory) {
    (uint32 x, uint32 y) = split(xy);
    uint64[8] memory nearTiles;
    nearTiles[0] = getUpLeft(x, y);
    nearTiles[1] = getUp(x, y);
    nearTiles[2] = getUpRight(x, y);
    nearTiles[3] = getRight(x, y);
    nearTiles[4] = getDownRight(x, y);
    nearTiles[5] = getDown(x, y);
    nearTiles[6] = getDownLeft(x, y);
    nearTiles[7] = getLeft(x, y);
    return nearTiles;
  }

  // index == 0
  function getUpLeft(uint32 x, uint32 y) internal pure returns (uint64 xy) {
    xy = x == 1 || y == 1 ? 0 : combine(x - 1, y - 1);
  }

  // index == 1
  function getUp(uint32 x, uint32 y) internal pure returns (uint64 xy) {
    xy = y == 1 ? 0 : combine(x, y - 1);
  }

  // index == 2
  function getUpRight(uint32 x, uint32 y) internal pure returns (uint64 xy) {
    xy = x == WIDTH || y == 1 ? 0 : combine(x + 1, y - 1);
  }

  // index == 3
  function getRight(uint32 x, uint32 y) internal pure returns (uint64 xy) {
    xy = x == WIDTH ? 0 : combine(x + 1, y);
  }

  // index == 4
  function getDownRight(uint32 x, uint32 y) internal pure returns (uint64 xy) {
    xy = x == WIDTH || y == HEIGHT ? 0 : combine(x + 1, y + 1);
  }

  // index == 5
  function getDown(uint32 x, uint32 y) internal pure returns (uint64 xy) {
    xy = y == HEIGHT ? 0 : combine(x, y + 1);
  }

  // index == 6
  function getDownLeft(uint32 x, uint32 y) internal pure returns (uint64 xy) {
    xy = x == 1 || y == HEIGHT ? 0 : combine(x - 1, y + 1);
  }

  // index == 7
  function getLeft(uint32 x, uint32 y) internal pure returns (uint64 xy) {
    xy = x == 1 ? 0 : combine(x - 1, y);
  }

  // combine two uint32 into one uint64
  function combine(uint32 x, uint32 y) internal pure returns (uint64) {
    return (uint64(x) << 32) | y;
  }

  // split one uint64 into two uint32
  function split(uint64 xy) internal pure returns (uint32, uint32) {
    uint32 x = uint32(xy >> 32);
    uint32 y = uint32(xy);
    return (x, y);
  }
}