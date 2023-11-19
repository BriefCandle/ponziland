// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import {TileLogic} from "@/libraries/TileLogic.sol";

import { IWorld } from "../src/codegen/world/IWorld.sol";

contract PostDeploy is Script {
  function run(address worldAddress) external {
    // Specify a store so that you can use tables directly in PostDeploy
    StoreSwitch.setStoreAddress(worldAddress);

    // Load the private key from the `PRIVATE_KEY` environment variable (in .env)
    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

    // Start broadcasting transactions from the deployer account
    vm.startBroadcast(deployerPrivateKey);

    // ------------------ EXAMPLES ------------------

    // Call increment on the world via the registered function selector
    uint32 newValue = IWorld(worldAddress).increment();
    console.log("Increment via IWorld:", newValue);

    uint64[] memory tileXYs = new uint64[](10);
    tileXYs[0] = TileLogic.combine(2, 2);
    tileXYs[1] = TileLogic.combine(2, 3);
    tileXYs[2] = TileLogic.combine(1, 2);
    tileXYs[3] = TileLogic.combine(3, 2);
    tileXYs[4] = TileLogic.combine(6, 6);
    tileXYs[5] = TileLogic.combine(7, 7);
    tileXYs[6] = TileLogic.combine(8, 8);
    tileXYs[7] = TileLogic.combine(9, 9);
    tileXYs[8] = TileLogic.combine(10, 10);
    tileXYs[9] = TileLogic.combine(11, 11);

    for (uint i = 0; i < tileXYs.length; i++) {
      IWorld(worldAddress).purchase(tileXYs[i], 1 ether, 1 ether);
    }

    vm.stopBroadcast();
  }
}
