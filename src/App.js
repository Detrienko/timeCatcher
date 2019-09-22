import React from 'react';
import './App.css';

//Components:
import Layout from './components/Layout/Layout';
import BusinessList from './components/BusinessList/BusinessList';

//Containers:
import MainDisplay from './containers/MainDisplay/MainDisplay';
import Stopwatch from './containers/Stopwatch/Stopwatch';

function App() {
  return (
    <Layout>
    	<BusinessList/>
    	<MainDisplay/>
    </Layout>
  );
}

export default App;
