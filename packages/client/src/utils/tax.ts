import { TAX_RATE } from "../constants";

export const getDuration = (timestamp: bigint, lastUpdated: bigint) => {
  return Number(timestamp - lastUpdated);
};
export const getTaxOwed = (price: bigint, duration: number) => {
  return ((duration * Number(price)) / 1e18) * TAX_RATE;
};
