import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/home" render={() => <HomePage />} />
    </div>
  );
};

export default App;
