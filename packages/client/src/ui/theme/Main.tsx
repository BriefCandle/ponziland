import React from "react";
import Map from "./Map";
import Hud from "./UI/Hud/Hud";
import { useMUD } from "../../store";
import { useEntityQuery } from "@latticexyz/react";
import { Has } from "@latticexyz/recs";
import { useNetworkLayer } from "../hooks/useNetworkLayer";

const totalWidth = 64 * 7 + 63 * 1;

export default function Main() {
  const networkLayer = useNetworkLayer();
  const Tile = networkLayer?.components.Tile;
  // const {
  //   networkLayer: {
  //     components: { Tile },
  //   },
  // } = useMUD();
  // console.log(useEntityQuery([Has(Tile.)]));
  console.log("networkLayer", networkLayer?.components.Tile.id);

  return (
    <div className="overflow-x-auto bg-[#466567]">
      <Map />
      <Hud />
    </div>
  );
}
