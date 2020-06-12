import React, { Component } from "react";
import './App.css';
import Home from "./components/Home";
import Layout from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Contact from './components/Contact';
import AddItem from './components/AddItem';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
    <div className="app">
      
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/urunler" component={Layout}></Route>
        <Route path="/sepet" component={Cart}></Route>
        <Route path="/iletisim" component={Contact}></Route>
        <Route path="/urunEkleme" component={AddItem}></Route>
      </Switch>
      <Footer/>
    </div>
  );
  }
}
export default App;
