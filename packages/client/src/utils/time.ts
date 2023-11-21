import dayjs from "dayjs";

export function unixTimeSecond() {
  return dayjs().unix();
}
