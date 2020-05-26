import React, { Component } from "react";
import './App.css';
import Home from "./components/Home";
import Layout from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Order from './components/Order';
import AddItem from './components/AddItem';
import SearchResults from './components/SearchResults';

class App extends Component {

  render() {
    return (
    <div className="app">
      <Home/>
      <Switch>
        <Route path="/" exact component={Layout}></Route>
        <Route path="/urunler" component={SearchResults}></Route>
        <Route path="/sepet" component={Cart}></Route>
        <Route path="/siparislerim" component={Order}></Route>
        <Route path="/iletisim" component={Contact}></Route>
        <Route path="/urunEkleme" component={AddItem}></Route>
      </Switch>
    </div>
  );
  }
  
}

export default App;
