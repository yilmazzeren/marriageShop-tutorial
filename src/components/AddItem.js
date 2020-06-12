import React, { Component } from "react";
import axios from "axios";

export default class AddItem extends Component {
  state = {
    imageUrl: "",
    productName: "",
    productPrice: "",
    categoryName:""
  };

  change = (e) => {
    this.setState({categoryName: e.target.value});
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = (event) => {

    axios
      .post("http://localhost:3300/urunEkleme", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      ;
  };
  render() {
    return (
      <div className="addItem-wrapper">
        <form onSubmit={this.onSubmitHandler}>
          <h3 style={{ textAlign: "center" }}>Ürün Resim Adresini Girin</h3>
          <input name="imageUrl" onChange={this.onChangeHandler} type="text" />

          <h3 style={{ textAlign: "center" }}>Ürün İsmini Girin</h3>
          <input
            name="productName"
            onChange={this.onChangeHandler}
            type="text"
          />

          <h3 style={{ textAlign: "center" }}>Ürün Fiyatını Girin</h3>
          <input
            name="productPrice"
            onChange={this.onChangeHandler}
            type="text"
          />
          <h3 style={{ textAlign: "center" }}>Kategori İsmini Seçin</h3>
          <div style={{ textAlign: "center" }}>
            <select onChange={this.change} value={this.state.categoryName} className="select">
              <option value="Gelinlik">Gelinlik</option>
              <option value="Davetiye">Davetiye</option>
              <option value="Fotoğraf">Fotoğraf</option>
              <option value="Nikah">Nikah</option>
              <option value="Mekanlar">Mekanlar</option>
              <option value="Gelin Çiçeği">Gelin Çiçeği</option>
              <option value="Gelin Aksesuarları">Gelin Aksesuarları</option>
              <option value="Nikah Şekeri">Nikah Şekeri</option>
              <option value="Ayakkabı">Ayakkabı</option>
            </select>
          </div>
          <input className="card-button" type="submit" value="Save" />
        </form>
      </div>
    );
  }
}
