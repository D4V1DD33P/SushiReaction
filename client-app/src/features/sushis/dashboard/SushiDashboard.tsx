import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import SushiList from "./SushiList";
import SushiStore from "../../../app/stores/sushiStore";

const SushiDashboard: React.FC = () => {
  const sushiStore = useContext(SushiStore);

  useEffect(() => {
    sushiStore.loadSushis();
  }, [sushiStore]);

  return <SushiList />;
};

export default observer(SushiDashboard);
