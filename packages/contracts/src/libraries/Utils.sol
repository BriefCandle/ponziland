// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;


library Utils {
  function toBytes32(address value) internal pure returns (bytes32) {
    return bytes32(uint256(uint160(value)));
  }

  function toAddress(bytes32 value) internal pure returns (address) {
    require(isAddress(value), "TypeCast: invalid address");
    return address(uint160(uint256(value)));
  }

  function isAddress(bytes32 value) internal pure returns (bool) {
    return value >> 160 == 0;
  }
}