import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';
import Footer from './components/footer/Footer';
import PhonePages from './components/phonePages/PhonePages';
import ItemPage from './components/itemPage/ItemPage'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/phones" exact component={PhonePages} />
        <Route path="/phones/:item" exact component={ItemPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
