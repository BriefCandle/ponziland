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
