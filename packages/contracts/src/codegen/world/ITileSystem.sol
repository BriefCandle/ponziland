// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

/* Autogenerated file. Do not edit manually. */

/**
 * @title ITileSystem
 * @dev This interface is automatically generated from the corresponding system contract. Do not edit manually.
 */
interface ITileSystem {
  function purchase(uint64 xy, uint256 price, uint256 amount) external;

  function claimTax(uint64 xy) external returns (uint256 total);

  function setPrice(uint64 xy, uint256 price) external;

  function stake(uint64 xy, uint256 amount) external;
}