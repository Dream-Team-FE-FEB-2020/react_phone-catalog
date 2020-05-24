import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact render={() => <HomePage />} />
      <Footer />
    </div>
  );
};

export default App;
