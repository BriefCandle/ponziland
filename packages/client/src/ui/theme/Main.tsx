import React from "react";
import Map from "./Map";
import Hud from "./UI/Hud/Hud";
import { useMUD } from "../../store";
import { useEntityQuery } from "@latticexyz/react";
import { Has } from "@latticexyz/recs";
import { useNetworkLayer } from "../hooks/useNetworkLayer";

const totalWidth = 64 * 7 + 63 * 1;

export default function Main() {
  return (
    <div className="overflow-x-auto bg-[#466567]">
      <Map />
      <Hud />
    </div>
  );
}
