import { PhaserLayer } from "../createPhaserLayer";
import {
  TILE_WIDTH,
  TILE_HEIGHT,
  LINE_WIDTH,
  STAKE_BUTTON_OFFSET,
} from "../constants";
import { WIDTH, HEIGHT } from "../../../constants";
import {
  Component,
  Entity,
  Has,
  Not,
  defineSystem,
  getComponentValue,
  getComponentValueStrict,
  setComponent,
} from "@latticexyz/recs";
import {
  getNearTiles,
  split,
  combine,
  toBytes32,
  getTileMapCoord,
} from "../../../utils/tile";
import { getTaxOwed } from "../../../utils/tax";
import { Hex } from "viem";
import { unixTimeSecond } from "../../../utils/time";
import { ClientComponents } from "../../../mud/createClientComponents";

export function createTileSystem(layer: PhaserLayer) {
  const {
    world,
    networkLayer: {
      components: { Tile, SelectedTile },
    },
    scenes: {
      Main: { phaserScene },
    },
  } = layer;

  const button_stake = phaserScene.add
    .image(0, 0, "MainAtlas", "sprites/soldier/idle/0.png")
    .setDepth(20)
    .setInteractive()
    .setVisible(false);

  const input_price = phaserScene.add
    .dom(100, 100)
    .createFromCache("form")
    .setDepth(30);

  // existing tile that is not selected
  defineSystem(
    world,
    [Has(Tile), Not(SelectedTile)],
    ({ entity }) => {
      const mapCoord = getTileMapCoord(BigInt(entity));
      const tile = phaserScene.add
        .rectangle(0, 0, 0, 0, 0x71ead2, 1)
        .setDepth(10)
        .setPosition(mapCoord.x, mapCoord.y)
        .setSize(TILE_WIDTH, TILE_HEIGHT);
      tile.setInteractive();
      tile.on("pointerdown", () => {
        setComponent(SelectedTile, entity, { value: entity });
      });
    },
    { runOnInit: true }
  );

  // existing tile that is selected
  defineSystem(
    world,
    [Has(SelectedTile), Has(Tile)],
    ({ entity }) => {
      const mapCoord = getTileMapCoord(BigInt(entity));
      console.log("selected tile", entity);
      const taxToClaim = getTotalTaxToClaim(Tile, entity);
      console.log("tax to claim", taxToClaim);
      const taxOwed = getTotalTaxOwed(Tile, entity);
      console.log("tax owed", taxOwed);
      button_stake.setPosition(
        mapCoord.x + STAKE_BUTTON_OFFSET.x,
        mapCoord.y + STAKE_BUTTON_OFFSET.y
      );
      // .setVisible(true);
      input_price.setPosition(mapCoord.x, mapCoord.y).setVisible(true);
    },
    { runOnInit: false }
  );

  // non-existing tile that is selected
  defineSystem(world, [Has(SelectedTile), Not(Tile)], ({ entity }) => {
    console.log("selected tile that does not exist yet", entity);
  });
}

function getTotalTaxToClaim(
  Tile: Component<ClientComponents["Tile"]["schema"]>,
  entity: Entity
) {
  const tiles = getNearTiles(BigInt(entity));
  const currTime = unixTimeSecond();
  const lastUpdated = getComponentValue(Tile, entity)?.lastUpdated;
  const totalTaxAmount = tiles
    .filter((xy) => xy != 0n)
    .map((xy) => {
      const entity = toBytes32(xy as bigint) as Entity;
      const price = getComponentValue(Tile, entity)?.price;
      const tax =
        lastUpdated && price ? getTaxOwed(price, currTime - lastUpdated) : 0;
      return tax;
    })
    .reduce((a, b) => a + b, 0);
  return totalTaxAmount;
}

function getTotalTaxOwed(
  Tile: Component<ClientComponents["Tile"]["schema"]>,
  entity: Entity
) {
  const tiles = getNearTiles(BigInt(entity));
  const price = getComponentValueStrict(Tile, entity).price;
  const currTime = unixTimeSecond();
  const totalTaxAmount = tiles
    .filter((xy) => xy != 0n)
    .map((xy) => {
      const entity = toBytes32(xy as bigint) as Entity;
      const lastUpdated = getComponentValue(Tile, entity)?.lastUpdated;
      const tax = lastUpdated ? getTaxOwed(price, currTime - lastUpdated) : 0;
      return tax;
    })
    .reduce((a, b) => a + b, 0);
  return totalTaxAmount;
}
