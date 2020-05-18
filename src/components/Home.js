import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
        <div className="navbar-logo">
          <h1 style = {{cursor:"pointer"}}>EVLİLİK <span style={{color:"orange"}}>&</span> BALAYI</h1>
          <h4 >Bizi Arayın : <span style={{color:"orange"}}>05055050505</span> </h4>
        </div>
        <div className="navbar-links">
            
            <ul className="navbar-items">
              <li>ÜRÜNLER</li>
              <li>SİPARİŞLERİM</li>
              <li>SEPET</li>
              <li>İLETİŞİM</li>
            </ul>
          </div>
          <div className="input-wrapper">
        <input className="search-input" placeholder="Ara" type="text" />
        <i  className="fas fa-search"></i>
        </div>
        </div>
      </div>
    );
  }
}
