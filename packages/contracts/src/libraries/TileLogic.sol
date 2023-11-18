// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

library TileLogic {
  function getNearTiles(uint64 xy) public pure returns (uint64[8] memory) {
    (uint32 x, uint32 y) = split(xy);
    uint64[8] memory nearTiles;
    nearTiles[0] = combine(x - 1, y - 1);
    nearTiles[1] = combine(x, y - 1);
    nearTiles[2] = combine(x + 1, y - 1);
    nearTiles[3] = combine(x - 1, y);
    nearTiles[4] = combine(x + 1, y);
    nearTiles[5] = combine(x - 1, y + 1);
    nearTiles[6] = combine(x, y + 1);
    nearTiles[7] = combine(x + 1, y + 1);
    return nearTiles;
  }

  // combine two uint32 into one uint64
  function combine(uint32 x, uint32 y) public pure returns (uint64) {
    return (uint64(x) << 32) | y;
  }

  // split one uint64 into two uint32
  function split(uint64 xy) public pure returns (uint32, uint32) {
    uint32 x = uint32(xy >> 32);
    uint32 y = uint32(xy);
    return (x, y);
  }
}