import React from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
