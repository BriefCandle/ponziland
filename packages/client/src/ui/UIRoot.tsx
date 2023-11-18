import { NetworkSummary } from "@latticexyz/dev-tools/src/summary/NetworkSummary";
import { useStore } from "../store";
import { LoadingScreen } from "./LoadingScreen";
import { Wrapper } from "./Wrapper";
import Map from "./theme/Map";

export const UIRoot = () => {
  const layers = useStore((state) => {
    return {
      networkLayer: state.networkLayer,
    };
  });


  return <Map></Map>;

  return (
    <Wrapper>
      <LoadingScreen />
    </Wrapper>
  );
};
