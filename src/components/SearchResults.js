import React, { Component } from "react";
import image1 from "../images/image1.jpg";

import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import * as cartActions from "../redux/actions/cartActions"
class SearchResults extends Component {

  addCartItem = (e) => {
    let checkImage = e.target.parentElement.previousElementSibling.src // image
    let checkPrice = e.target.previousElementSibling.innerHTML // Fiyat
    let checkProductName = e.target.previousElementSibling.previousElementSibling.innerHTML // Ürün ,İsmi

    let array = [{checkImage,checkPrice,checkProductName}]
    return this.props.actions.cart(array).payload;
   
  }
  
  render() {
    return (
      <div style={{ width: "100%" }} className="searchResult-wrapper">
        <h4 style={{ margin: "0" }}>Arama Sonuçları : <p style={{color:"orange", display:"inline-block",fontSize:"15px"}}>{this.props.text}</p>  </h4>
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
              <button onClick={this.addCartItem} className="card-button">Sepete Ekle</button>
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
              <div className="card-title">Modelli</div>
              <div className="card-price">2000Tl</div>
              <button onClick={this.addCartItem} className="card-button">Sepete Ekle</button>
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

function mapDispatchToProps (dispatch) {
    return {
      actions : {
        cart : bindActionCreators(cartActions.addCart,dispatch)
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);
