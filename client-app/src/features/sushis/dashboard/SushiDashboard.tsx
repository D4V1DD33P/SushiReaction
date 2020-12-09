import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import SushiList from './SushiList'
import SushiStore from '../../../app/stores/sushiStore'
import { Loading } from '../../../app/layout/Loading'

const SushiDashboard: React.FC = () => {
    const sushiStore = useContext(SushiStore);

    useEffect(() => {
        sushiStore.loadSushis();
    }, [sushiStore]);

    if (sushiStore.loadingInitial) return <Loading content="Loading sushis..." />

    return (
        <Grid>
            <Grid.Column width={10}>
                <SushiList />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Sushi filters</h2>
            </Grid.Column>
        </Grid>
    )
}

export default observer(SushiDashboard);
