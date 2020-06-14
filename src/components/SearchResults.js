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
    return this.props.actions.cart(array);
  };

  render() {
    return (
      <div style={{ width: "100%" ,margin:"50px" }} className="searchResult-wrapper">
        <h4 style={{ margin: "0" }}>
          Arama Sonuçları :
          <p
            style={{
              color: "#858383",
              display: "inline-block",
              fontSize: "15px",
              marginBottom:"60px"
            }}
          >
            {this.props.text}
          </p>
        </h4>

        <div className="card-wrapper">
          {this.props.products.map((product) => (
            <Fade key={product._id} bottom>
              <div  className="card">                
                    <img
                      className="product-images"
                      src={product.imageUrl}
                      alt=""
                    />
                <div className="card-body">
                  <div style={{marginTop:"10px",marginBottom:"10px"}} className="card-title">{product.productName}</div>
                  <div style={{marginBottom:"10px"}} className="card-price">{product.productPrice}</div>
                  <button  onClick={this.addCartItem} className="card-button">
                    Sepete Ekle
                  </button>
                </div>
              </div>
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
