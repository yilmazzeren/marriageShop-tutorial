import React, { Component } from "react";
import { connect } from "react-redux";


class Cart extends Component {
  render() {
    return (
      <div>
        {this.props.cart.map((e) => (
          <div>
            <img src={e.checkImage} alt="" />
            <p>{e.checkPrice}</p>
            <p>{e.checkProductName}</p>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.addCartReducer,
  };
}

export default connect(mapStateToProps)(Cart);
