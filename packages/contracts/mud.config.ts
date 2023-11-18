import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      valueSchema: "uint32",
    },
    Tile: {
      keySchema: {
        xy: "uint64",
      },
      valueSchema: {
        owner: "bytes32",
        amount: "uint256",
        lastUpdated: "uint40[]",
      },
    },
  },
});
