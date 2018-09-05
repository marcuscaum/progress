import React from 'react';

import Box from 'styles/Box.styled';

import Layout from 'components/Layout';

const Home = () => (
  <Layout.Container>
    <header className="App-header">
      <h1 className="App-title">Test travis</h1>
    </header>
    <Box width={1 / 2} bg="tomato">
      To get started, dasdas <code>src/App.js</code> and save to reload.
    </Box>
  </Layout.Container>
);

export default Home;
