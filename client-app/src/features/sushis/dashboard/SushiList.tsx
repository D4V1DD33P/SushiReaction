import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import SushiStore from '../../../app/stores/sushiStore'
import { SushiListItem } from './SushiListItem'

const SushiList: React.FC = () => {
  const sushiStore = useContext(SushiStore);
  const { sushisByDate } = sushiStore;
  return (
    <Segment clearing>
      <Item.Group divided>
        {sushisByDate.map(sushi => (
          <SushiListItem key={sushi.id} sushi={sushi} />
        ))}
      </Item.Group>
    </Segment>
  )
}

export default observer(SushiList);