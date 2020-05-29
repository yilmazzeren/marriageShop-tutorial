import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as categoryActions from "../redux/actions/categoryActions";
import { connect } from "react-redux";
class Category extends Component {
 
  componentDidMount() {
    this.props.actions.getCategories()
  }

  changeProporties = (e) => {
    const liElement=e.target.parentElement;
    
    if(liElement.style.backgroundColor==="") {
      liElement.style.backgroundColor="orange"
    }else if(liElement.style.backgroundColor==="orange") {
      liElement.style.backgroundColor=""
    }
  }

  render() {
    return (
      <div className="category-wrapper">
        <h3 className="category-title">KATEGORİ</h3>
        <ul className="list-group">
          {this.props.categories.map((item,id) => (
            <li key={id} className="list-group-item">
              <input onChange={this.changeProporties}  type="checkbox" /> {item.categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories : state.categoryListReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions : {
      getCategories : bindActionCreators(categoryActions.getCategories,dispatch)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Category);
