import React, { Component } from "react";
import * as inputActions from "../redux/actions/inputActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Fade from "react-reveal/Fade";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";

import Slide from 'react-reveal/Slide';
class Home extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <Fade left>
          <div className="section1">
            <h3
              style={{
                textAlign: "center",
                fontSize: "50px",
                padding: "60px",
                letterSpacing: "10px",
              }}
            >
              2020 YAZ SEZONU
            </h3>
          </div>
        </Fade>

        <Fade bottom>
          <div className="section2">
            <img className="first-image" src={image2} alt="" />
            <Fade right>
              <div className="section2-text">
                BALIK <hr />
              </div>
            </Fade>
            <Fade bottom>
              <img className="second-image" src={image3} alt="" />
              <Fade top>
                <div className="section2-text2">
                  MEKANLAR<hr />
                </div>
              </Fade>
            </Fade>
          </div>
        </Fade>
        <Slide left>
          <div className="section3">
          <h3
              style={{
                textAlign: "left",
                fontSize: "50px",
                padding: "60px",
                letterSpacing: "10px",
                color:"white"
              }}
            >
              DIŞ ÇEKİM
            </h3>
          </div>
        </Slide>
            <Slide left>
          <div >
          <h3
              style={{
                textAlign: "left",
                fontSize: "50px",
                padding: "60px",
                letterSpacing: "10px",
                color:"white"
              }}
            >
              Hakkımızda
            </h3>
          </div>
        </Slide>
        
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

export default connect(undefined, mapDispatchToProps)(Home);
