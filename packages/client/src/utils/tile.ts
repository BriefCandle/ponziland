import { WIDTH, HEIGHT } from "../constants";
import {
  LINE_WIDTH,
  TILE_HEIGHT,
  TILE_WIDTH,
} from "../layers/phaser/constants";

export function getTileMapCoord(xy: bigint) {
  const [x, y] = split(xy);
  return {
    x: (TILE_WIDTH + LINE_WIDTH) * x,
    y: (TILE_HEIGHT + LINE_WIDTH) * y,
  };
}

// convert uint64, which is tile bigint to tileid string
export function toBytes32(num: bigint): string {
  return "0x" + num.toString(16).padStart(64, "0");
}

// combine two uint32 into one uint64
export function combine(x: number, y: number): bigint {
  return (BigInt(x) << 32n) | BigInt(y);
}

// split one uint64 into two uint32
export function split(xy: bigint): [number, number] {
  const x = Number(xy >> 32n);
  const y = Number(xy & 0xffffffffn);
  return [x, y];
}

export function getNearTiles(xy: bigint) {
  const [x, y] = split(xy);
  const nearTiles = [
    getUpLeft(x, y),
    getUp(x, y),
    getUpRight(x, y),
    getRight(x, y),
    getDownRight(x, y),
    getDown(x, y),
    getDownLeft(x, y),
    getLeft(x, y),
  ];
  return nearTiles;
}

function getUpLeft(x: number, y: number) {
  return x == 1 || y == 1 ? 0 : combine(x - 1, y - 1);
}

// index == 1
function getUp(x: number, y: number) {
  return y == 1 ? 0 : combine(x, y - 1);
}

// index == 2
function getUpRight(x: number, y: number) {
  return x == WIDTH || y == 1 ? 0 : combine(x + 1, y - 1);
}

// index == 3
function getRight(x: number, y: number) {
  return x == WIDTH ? 0 : combine(x + 1, y);
}

// index == 4
function getDownRight(x: number, y: number) {
  return x == WIDTH || y == HEIGHT ? 0 : combine(x + 1, y + 1);
}

// index == 5
function getDown(x: number, y: number) {
  return y == HEIGHT ? 0 : combine(x, y + 1);
}

// index == 6
function getDownLeft(x: number, y: number) {
  return x == 1 || y == HEIGHT ? 0 : combine(x - 1, y + 1);
}

// index == 7
function getLeft(x: number, y: number) {
  return x == 1 ? 0 : combine(x - 1, y);
}
