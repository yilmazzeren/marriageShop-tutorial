import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as categoryActions from "../redux/actions/categoryActions";
import { connect } from "react-redux";
import Jello from 'react-reveal/Jello';

class Category extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }


  render() {
    return (
      <Jello >
        <div className="category-wrapper">
          <h3 style={{borderBottom:"1px solid black" , width:"10%",marginTop:"85px",alignSelf:"center"}} className="category-title">KATEGORİLER</h3>
          <ul className="list-group">
            {this.props.categories.map((item, id) => (
              <li key={id} className="list-group-item">
                <input type="checkbox" />{" "}
                {item.categoryName}
              </li>
            ))}
          </ul>
        </div>
      </Jello>
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
