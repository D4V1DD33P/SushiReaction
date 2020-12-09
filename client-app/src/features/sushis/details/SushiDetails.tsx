import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { Loading } from '../../../app/layout/Loading'
import SushiStore from '../../../app/stores/sushiStore'

interface DetailParams {
    id: string
}

const SushiDetails: React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
    const sushiStore = useContext(SushiStore);
    const {
        sushi,
        loadSushi,
        loadingInitial
      } = sushiStore;

    useEffect(() => {
        loadSushi(match.params.id);
    }, [loadSushi, match.params.id])

    if (loadingInitial || !sushi) return <Loading content='Loading sushi...' />

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${sushi!.category}.jpg`}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>{sushi!.name}</Card.Header>
                <Card.Description>
                    {sushi!.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button as={Link} to={`/manage/${sushi.id}`} basic color="blue" content="Edit"></Button>
                    <Button onClick={() => history.push('/sushis')} basic color="grey" content="Cancel"></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default observer(SushiDetails);