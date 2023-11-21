import { PhaserLayer } from "../createPhaserLayer";
import { WIDTH, HEIGHT, TILE_WIDTH, TILE_HEIGHT } from "../constants";

export const createCamera = (layer: PhaserLayer) => {
  const {
    scenes: {
      Main: {
        camera: { phaserCamera },
      },
    },
  } = layer;

  // phaserCamera.centerOn(WIDTH * TILE_WIDTH, HEIGHT * TILE_HEIGHT);
};
