import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import SushiStore from "../../../app/stores/sushiStore";
import { Box, Skeleton, Badge, Image, Container, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import SushiDetailedInfo from "./SushiDetailedInfo";

interface DetailParams {
  id: string;
}

const SushiDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const sushiStore = useContext(SushiStore);
  const { sushi, loadSushi } = sushiStore;

  useEffect(() => {
    loadSushi(match.params.id);
  }, [loadSushi, match.params.id]);

  if (!sushi) return <h2>Sushi not found</h2>;

  return  (
    <Skeleton isLoaded>
      <SushiDetailedInfo sushi={sushi}></SushiDetailedInfo>
    </Skeleton>
  );;
};

export default observer(SushiDetails);
