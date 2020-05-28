import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';
import Footer from './components/footer/Footer';
import PhonePages from './components/phonePages/PhonePages';
import ItemPage from './components/itemPage/ItemPage';
import { FavoritesContextWrapper } from './helpers/FavoritesContext';
import FavoritePage from './components/FavoritePage/FavoritePage';
import CartPage from './components/CartPage/CartPage';
import { CartContextWrapper } from './helpers/CartContext';
import ErrorPage from './helpers/ErrorPage';

const App = () => {
  return (
    <div className="App">
      <FavoritesContextWrapper>
        <CartContextWrapper>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/phones" exact component={PhonePages} />
            <Route
              path="/phones/:item?"
              exact
              render={({ match }) => (
                <ItemPage currentItem={match.params.item} />
              )}
            />
            <Route path="/accessories" exact component={ErrorPage} />
            <Route path="/favorite" exact component={FavoritePage} />
            <Route path="/cart" exact component={CartPage} />
          </Switch>
          <Footer />
        </CartContextWrapper>
      </FavoritesContextWrapper>
    </div>
  );
};

export default App;
