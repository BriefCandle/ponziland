import { PhaserLayer } from "../createPhaserLayer";
import { TILE_WIDTH, TILE_HEIGHT, LINE_WIDTH } from "../constants";
import { WIDTH, HEIGHT } from "../../../constants";
import { Entity, setComponent } from "@latticexyz/recs";
import { combine, toBytes32 } from "../../../utils/tile";

export function createMapSystem(layer: PhaserLayer) {
  const {
    world,
    networkLayer: {
      components: { Tile, SelectedTile },
    },
    scenes: {
      Main: { phaserScene },
    },
  } = layer;

  // const noise = createNoise2D();

  phaserScene.cameras.main.setBackgroundColor("#000033");
  // phaserScene.cameras.main.centerOn(WIDTH * TILE_WIDTH, HEIGHT * TILE_HEIGHT);

  // x, y coordinates start at 1 instead of 0
  for (let x = 1; x <= WIDTH; x++) {
    for (let y = 1; y <= HEIGHT; y++) {
      const entity = toBytes32(combine(x, y)) as Entity;
      const tile = phaserScene.add
        .rectangle(0, 0, 0, 0, 0xffffff, 1)
        .setDepth(1)
        .setPosition(
          (TILE_WIDTH + LINE_WIDTH) * x,
          (TILE_HEIGHT + LINE_WIDTH) * y
        )
        .setSize(TILE_WIDTH, TILE_HEIGHT);
      // set titles, either existing or not existing, to be selectable
      tile.setInteractive();
      tile.on("pointerdown", () => {
        setComponent(SelectedTile, entity, { value: entity });
      });
    }
  }
}
