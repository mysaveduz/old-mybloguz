import React, { Component } from 'react';

import MainPage from './containers/MainPage/MainPage';
import Layout from './hoc/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
             <MainPage />
          </Layout>
      </div>
    );
  }
}

export default App;
