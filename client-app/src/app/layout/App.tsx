import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import SushiDashboard from '../../features/sushis/dashboard/SushiDashboard';
import NavBar from '../../features/nav/NavBar';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import SushiDetails from '../../features/sushis/details/SushiDetails';
import SushiForm from '../../features/sushis/form/SushiForm';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <Fragment>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Route exact path='/sushis' component={SushiDashboard} />
            <Route path='/sushis/:id' component={SushiDetails} />
            <Route key={location.key} path={['/createSushi', '/manage/:id']} component={SushiForm} />
          </Container>
        </Fragment>
      )} />

    </Fragment>
  );
}

export default withRouter(observer(App));
