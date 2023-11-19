import { useMUD } from "./MUDContext";
import Map from "./web/Map";
import { plots } from "./web/OnchainData";

const styleUnset = { all: "unset" } as const;

export const App = () => {
  const {
    network: { tables, useStore },
    systemCalls: { addTask, toggleTask, deleteTask },
  } = useMUD();

  const tasks = useStore((state) => {
    const records = Object.values(state.getRecords(tables.Tasks));
    records.sort((a, b) => Number(a.value.createdAt - b.value.createdAt));
    return records;
  });

  // Populate the plots array
  for (let i = 1; i <= 64; i++) {
    for (let j = 1; j <= 64; j++) {
      plots.push({
        x: i,
        y: j,
        id: `${i}, ${j}`,
        owner: `Owner ${i}-${j}`,
        taxToClaim: Math.random() * 1000,
        taxReserve: Math.random() * 1000,
        salePrice: Math.random() * 5000
      });
    }
  }

  return (
    <div>
      <Map />
    </div>
  );
};
