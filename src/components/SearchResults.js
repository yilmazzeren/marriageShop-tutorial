import React, { Component } from "react";
import image1 from "../images/image1.jpg";
export default class SearchResults extends Component {



    
  render() {
    return (
      <div style={{ width: "100%" }} className="searchResult-wrapper">
        <h4 style={{ margin: "0" }}>Arama Sonuçları</h4>
        <hr />
        <div className="card-wrapper">
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
              onClick={this.imageFonk}
            />
            <div className="card-body">
              <div className="card-title">Dantel Modelli</div>
              <div className="card-price">5000Tl</div>
              <button className="card-button">Sepete Ekle</button>
            </div>
          </div>
          
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
              onClick={this.imageFonk}
            />
            <div className="card-body">
              <div className="card-title">Dantel Modelli</div>
              <div className="card-price">5000Tl</div>
              <button className="card-button">Sepete Ekle</button>
            </div>
          </div>
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
              onClick={this.imageFonk}
            />
            <div className="card-body">
              <div className="card-title">Dantel Modelli</div>
              <div className="card-price">5000Tl</div>
              <button className="card-button">Sepete Ekle</button>
            </div>
          </div>
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
              onClick={this.imageFonk}
            />
            <div className="card-body">
              <div className="card-title">Dantel Modelli</div>
              <div className="card-price">5000Tl</div>
              <button className="card-button">Sepete Ekle</button>
            </div>
          </div>
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
              onClick={this.imageFonk}
            />
            <div className="card-body">
              <div className="card-title">Dantel Modelli</div>
              <div className="card-price">5000Tl</div>
              <button className="card-button">Sepete Ekle</button>
            </div>
          </div>
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
              onClick={this.imageFonk}
            />
            <div className="card-body">
              <div className="card-title">Dantel Modelli</div>
              <div className="card-price">5000Tl</div>
              <button className="card-button">Sepete Ekle</button>
            </div>
          </div>
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
              onClick={this.imageFonk}
            />
            <div className="card-body">
              <div className="card-title">Dantel Modelli</div>
              <div className="card-price">5000Tl</div>
              <button className="card-button">Sepete Ekle</button>
            </div>
          </div>
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
              onClick={this.imageFonk}
            />
            <div className="card-body">
              <div className="card-title">Dantel Modelli</div>
              <div className="card-price">5000Tl</div>
              <button className="card-button">Sepete Ekle</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
