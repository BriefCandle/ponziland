// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { System } from "@latticexyz/world/src/System.sol";
import {TileLogic} from "@/libraries/TileLogic.sol";
import {Utils} from "@/libraries/Utils.sol";

contract TileSystem is System {
  
  function purchase(uint64 xy, uint256 price, uint256 amount) public { 
    TileLogic._purchase(xy, price, amount);
  }

  
  function claimTax(uint64 xy) public returns (uint256 total) {
    return TileLogic._claimTax(xy);
  }

  function setPrice(uint64 xy, uint256 price) public {
    TileLogic._setPrice(xy, price);
  }

  function stake(uint64 xy, uint256 amount) public {
    TileLogic._stake(xy, amount);
  }
  
}