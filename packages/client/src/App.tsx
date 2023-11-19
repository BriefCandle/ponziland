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

  function generateFakeEthereumPublicKey(): string {
    let key = '0x';
    const characters = '0123456789abcdef';
    for (let i = 0; i < 40; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
}



function getRandomWholeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


  // Populate the plots array
  for (let i = 1; i <= 64; i++) {
    for (let j = 1; j <= 64; j++) {

      const assignEthereumKey = Math.random() < 0.2; // Roughly every 5th plot
      const assignEthereumPersonal = Math.random() < 0.005;

      const plot = {
        x: i,
        y: j,
        id: `${i}, ${j}`,
      };

      if (assignEthereumKey) {
        plot.owner = generateFakeEthereumPublicKey();
        plot.taxReserve = getRandomWholeNumber(10, 500);
        plot.salePrice = getRandomWholeNumber(10, 500);
      }
      if (assignEthereumPersonal) {
        plot.owner = '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5';
      }

      plots.push(plot);
    }
  }

  return (
    <div>
      <Map />
    </div>
  );
};
