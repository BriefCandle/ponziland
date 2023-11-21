import { NetworkSummary } from "@latticexyz/dev-tools/src/summary/NetworkSummary";
import { useStore } from "../store";
import { LoadingScreen } from "./LoadingScreen";
import { Wrapper } from "./Wrapper";
import Main from "./theme/Main";
import { useEffect, useState } from "react";

export const UIRoot = () => {
  const layers = useStore((state) => {
    return {
      networkLayer: state.networkLayer,
      phaserLayer: state.phaserLayer,
    };
  });
  console.log("ui");
  if (!layers.networkLayer || !layers.phaserLayer) return <></>;
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  // if (isLoading) return null;

  return <Main></Main>;

  // return (
  //   <Wrapper>
  //     <Main></Main>
  //     <LoadingScreen />
  //   </Wrapper>
  // );
};
