import React, { Component } from 'react'
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import * as inputActions from "../redux/actions/inputActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Navbar extends Component {

    searchProduct = (e) => {
        let inputElement = document.getElementsByClassName("search-input");
        let spann = document.getElementById("span");
        if (inputElement[0].style.display === "") {
          inputElement[0].style.display = "inline-block";
          spann.style.display = "none";
        }
      };
      myFunc = (e) => {
        let inputValuee = document.getElementsByClassName("search-input");
        inputValuee.value = "";
        return this.props.actions.changeInput(
          e.target.previousSibling.previousSibling.value
        ).payload;
      };
    render() {
        return (
            <div className="navbar">
            <Zoom>
              <div className="navbar-links">
                <div style={{ marginTop: "8px", fontSize: "25px" }}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      letterSpacing: "1px",
                    }}
                  >
                    Wedding&Shop
                  </Link>
                </div>
                <ul className="navbar-items">
                  <Link to="/urunler">
                    <li>ÜRÜNLER</li>
                  </Link>
                  <Link to="/siparislerim">
                    <li>SİPARİŞLERİM</li>
                  </Link>
                  <Link to="sepet">
                    <li>SEPET</li>
                  </Link>
                  <Link to="iletisim">
                    <li>İLETİŞİM</li>
                  </Link>
                </ul>
                <div onClick={this.searchProduct} className="search_btn">
                  <Flip right>
                    <input
                      placeholder="Ürün Ara"
                      className="search-input"
                      type="text"
                      onChange={this.myFunc2}
                    />
                    <span id="span">Ara</span>
                    <i
                      onClick={this.myFunc}
                      className="search-icon fas fa-search"
                    ></i>
                  </Flip>
                </div>
              </div>
            </Zoom>
          </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: {
        changeInput: bindActionCreators(inputActions.changeInput, dispatch),
      },
    };
  }
  
  export default connect(undefined, mapDispatchToProps)(Navbar);