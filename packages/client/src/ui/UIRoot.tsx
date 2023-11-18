import { NetworkSummary } from "@latticexyz/dev-tools/src/summary/NetworkSummary";
import { useStore } from "../store";
import { LoadingScreen } from "./LoadingScreen";
import { Wrapper } from "./Wrapper";
import Main from "./theme/Main";

export const UIRoot = () => {
  const layers = useStore((state) => {
    return {
      networkLayer: state.networkLayer,
    };
  });


  return <Main></Main>;

  return (
    <Wrapper>
      <LoadingScreen />
    </Wrapper>
  );
};
