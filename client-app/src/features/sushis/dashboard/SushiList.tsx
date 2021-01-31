import { Grid, Stack, Container, Box, Flex } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import SushiStore from '../../../app/stores/sushiStore'
import { SushiListItem } from './SushiListItem'

const SushiList: React.FC = () => {
  const sushiStore = useContext(SushiStore);
  const { sushisByDate } = sushiStore;
  return (
    <Container>
      <Flex mt="3">
        {sushisByDate.map(sushi => (
          <Box mr="3">
            <SushiListItem key={sushi.id} sushi={sushi}  />
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default observer(SushiList);