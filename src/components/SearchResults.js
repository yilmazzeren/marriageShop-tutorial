import React, { Component } from "react";
import image1 from "../images/image1.jpg";

import {connect} from "react-redux";

class SearchResults extends Component {
  
  render() {
    return (
      <div style={{ width: "100%" }} className="searchResult-wrapper">
        <h4 style={{ margin: "0" }}>Arama Sonuçları : {this.props.text} </h4>
        <hr />
        <div className="card-wrapper">
          <div className="card">
            <img
              style={{ width: "35vh" }}
              className="image"
              src={image1}
              alt=""
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

function mapStateToProps(state) {
  return {
    text: state.inputReducer,
   
  };
}

export default connect(mapStateToProps)(SearchResults);
