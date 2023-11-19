import { NetworkSummary } from "@latticexyz/dev-tools/src/summary/NetworkSummary";
import { useStore } from "../store";
import { LoadingScreen } from "./LoadingScreen";
import { Wrapper } from "./Wrapper";
import Main from "./theme/Main";
import { useEffect, useState } from "react";

export const UIRoot = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) return null;

  return <Main></Main>;

  return (
    <Wrapper>
      <LoadingScreen />
    </Wrapper>
  );
};
