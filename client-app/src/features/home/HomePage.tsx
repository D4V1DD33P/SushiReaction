import { Container } from '@chakra-ui/react';
import React from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <h1>Home page</h1>
      <h3>Go to <Link to='/sushis'>Sushis</Link></h3>
    </Container>
  );
};
export default HomePage;