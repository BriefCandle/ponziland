import { PhaserLayer } from "../createPhaserLayer";
import { createCamera } from "./createCamera";
import { createMapSystem } from "./createMapSystem";
import { createTileSystem } from "./createTileSystem";

export const registerSystems = (layer: PhaserLayer) => {
  createCamera(layer);
  createMapSystem(layer);
  createTileSystem(layer);
};
