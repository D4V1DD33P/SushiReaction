import { StarIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Skeleton, Badge, Image, Container, Text } from "@chakra-ui/react";
import React from "react";
import { ISushi } from "../../../app/models/sushi";

const SushiDetailedInfo: React.FC<{ sushi: ISushi }> = ({ sushi }) => {
  return (
    <Container maxW="xl" centerContent mt="3">
    <Box padding="4%" bg="tomato" borderRadius="20px">
      <Image src={`/assets/categoryImages/${sushi.category}.png`} />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h2"
          lineHeight="tight"
          isTruncated
        >
         <Text fontSize="xl"> {sushi.number} - {sushi.name} </Text>
        </Box>

        <Box>
          <Text fontSize="lg"> {sushi.description} </Text>
        </Box>

        <Box d="flex" mt="3" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                w={8}
                h={8}
                key={i}
                color={i < sushi.rating ? "yellow.400" : "yellow.100"}
              />
            ))}
        </Box>
      </Box>
    </Box>
  </Container>
  );
};

export default SushiDetailedInfo;
