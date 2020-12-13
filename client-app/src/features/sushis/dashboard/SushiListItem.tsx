import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Item, Button, Label } from "semantic-ui-react";
import { ISushi } from "../../../app/models/sushi";
import SushiStore from "../../../app/stores/sushiStore";

export const SushiListItem: React.FC<{ sushi: ISushi }> = ({ sushi }) => {
  const sushiStore = useContext(SushiStore);
  const { submitting, target } = sushiStore;
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`/assets/categoryImages/${sushi.category}.png`} />
      <Box p="3">
        <Box d="flex" alignItems="baseline">
          <Box
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
            textTransform="uppercase"
          >
            {sushi.number} &bull; {sushi.name}
          </Box>

          <Badge borderRadius="full" px="2" colorScheme="teal" ml="1">
            {sushi.category}
          </Badge>
        </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {sushi.description}
          </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < sushi.rating ? "yellow.500" : "yellow.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            Rate Me
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
