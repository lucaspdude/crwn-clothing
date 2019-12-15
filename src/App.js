import React from 'react';

import {Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

import './pages/homepage/homepage.styles.scss';

import ShopPage from './pages/pages/shop.component'



function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/' component={ShopPage} />
    </div>
  );
}

export default App;
