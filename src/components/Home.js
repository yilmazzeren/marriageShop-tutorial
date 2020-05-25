import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as inputActions from "../redux/actions/inputActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class Home extends Component {
  

  myFunc =(e) => {
    return this.props.actions.changeInput(e.target.value).payload
  }
  
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <h1 style={{ cursor: "pointer" }}>
                EVLİLİK <span style={{ color: "orange" }}>&</span> BALAYI
              </h1>
            </Link>
            <h4>
              Bizi Arayın : <span style={{ color: "orange" }}>05055050505</span>{" "}
            </h4>
          </div>
          <div className="navbar-links">
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
              <Link to="iletisim"><li>İLETİŞİM</li></Link>
              <Link to="urunEkleme"><li>EKLE</li></Link>
            </ul>
          </div>
        
          <div className="input-wrapper">
            <input onChange={this.myFunc} className="search-input" placeholder="Ara" type="text" />
            <i className="fas fa-search"></i>
            
          </div>
        </div>
        
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeInput: bindActionCreators(inputActions.changeInput, dispatch),
    },
  };
}

export default connect(undefined,mapDispatchToProps)(Home);
