import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as cartActions from "../redux/actions/cartActions";
import * as productsActions from "../redux/actions/productsActions";

import Fade from "react-reveal/Fade";
class SearchResults extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addCartItem = (e) => {
    let checkImage = e.target.parentElement.previousElementSibling.src; // image
    let checkPrice = e.target.previousElementSibling.innerHTML; // Fiyat
    let checkProductName =
      e.target.previousElementSibling.previousElementSibling.innerHTML; // Ürün ,İsmi

    let array = [{ checkImage, checkPrice, checkProductName }];
    return this.props.actions.cart(array).payload;
  };

  render() {
    return (
      <div style={{ width: "100%" }} className="searchResult-wrapper">
        <h4 style={{ margin: "0" }}>
          Arama Sonuçları :{" "}
          <p
            style={{
              color: "orange",
              display: "inline-block",
              fontSize: "15px",
            }}
          >
            {this.props.text}
          </p>
        </h4>
        <hr />
        <div className="card-wrapper">
          {this.props.products.map((product, id) => (
            <Fade bottom>
              <div key={id} className="card">
                <img
                  style={{ width: "35vh" }}
                  className="image"
                  src={product.imageUrl}
                  alt=""
                />
                <div className="card-body">
                  <div className="card-title">{product.productName}</div>
                  <div className="card-price">{product.productPrice}</div>
                  <button onClick={this.addCartItem} className="card-button">
                    Sepete Ekle
                  </button>
                </div>
              </div>{" "}
            </Fade>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.inputReducer,
    products: state.productsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      cart: bindActionCreators(cartActions.addCart, dispatch),
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
