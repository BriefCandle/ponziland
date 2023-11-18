// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { System } from "@latticexyz/world/src/System.sol";
import {Tile} from "@/codegen/tables/Tile.sol";
import {TileLogic} from "@/libraries/TileLogic.sol";
import {Utils} from "@/libraries/Utils.sol";

contract TileSystem is System {
  function tokeover(uint64 xy) public { 
    (uint32 x, uint32 y) = TileLogic.split(xy);
    if (x > 64 || y > 64) revert("Exceed Map");
    
    uint64[8] memory nearTiles = TileLogic.getNearTiles(xy);
    for (uint i = 0; i < 8; i++) {
      uint64 nearTile = nearTiles[i];
      (uint32 nx, uint32 ny) = TileLogic.split(nearTile);
      if (nx == 0 || ny == 0) {
        continue;
      }
      uint64 nearTileOwner = Tile.getOwner(nearTile);
      if (nearTileOwner == 0) {
        continue;
      }
      // TODO: give nearTileOwner some shit
    }

    // TODO: give original owner some shit
    Tile.set(uint64, Utils.toBytes32(_msgSender()), 1000);
  }
}