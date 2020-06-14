import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { bindActionCreators } from "redux";
import * as categoryActions from "../redux/actions/categoryActions";
import { connect } from "react-redux";

class Footer extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  changeCategory = (a) => {
    console.log(a);
  };
  render() {
    return (
      <div>
        <hr />
        <footer>
          <div className="social">
            <h3>SOSYAL MEDYA</h3>
          </div>
          <Flip left>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </Flip>
          <Fade bottom>
            <div className="down-menu">
              <div>
                <span>HAKKIMIZDA</span>
              </div>

              <div>
                <span>ÜRÜNLER</span>
                <ul>
                  {this.props.categories.map((item, id) => (
                    <li
                      onClick={() => this.changeCategory(item.categoryName)}
                      key={id}
                      className="list-group-item"
                    >
                      {item.categoryName}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span>KAMPANYALAR</span>
              </div>
              <div>
                <span>İLETİŞİM</span>
              </div>
            </div>
          </Fade>
        </footer>
        <hr />
        <div style={{ margin: "40px" }}>
          <p>© 2020 Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
