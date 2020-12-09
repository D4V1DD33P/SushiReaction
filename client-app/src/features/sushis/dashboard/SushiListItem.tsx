import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Item, Button, Label } from 'semantic-ui-react'
import { ISushi } from '../../../app/models/sushi'
import SushiStore from '../../../app/stores/sushiStore'

export const SushiListItem: React.FC<{ sushi: ISushi }> = ({ sushi }) => {
    const sushiStore = useContext(SushiStore);
    const { deleteSushi, submitting, target } = sushiStore;
    return (
        <Item key={sushi.id}>
            <Item.Content>
                <Item.Header as='a'>{sushi.name}</Item.Header>
                <Item.Description>
                    <div>{sushi.description}</div>
                    <div>
                        {sushi.category}, {sushi.type}
                    </div>
                </Item.Description>
                <Item.Extra>
                    <Button
                        as={Link} to={`/sushis/${sushi.id}`}
                        floated='right'
                        content='View'
                        color='blue'
                    />
                    <Button
                        name={sushi.id}
                        loading={target === sushi.id && submitting}
                        onClick={(e) => deleteSushi(e, sushi.id)}
                        floated='right'
                        content='Delete'
                        color='red'
                    />
                    <Label basic content={sushi.category} />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}