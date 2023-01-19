import React from 'react';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Login from '../containers/login';

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  )
};

export default App;