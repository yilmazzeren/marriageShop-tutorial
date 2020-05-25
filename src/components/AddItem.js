import React, { Component } from 'react'

export default class AddItem extends Component {
    render() {
        return (
            <div className="addItem-wrapper">
                <label htmlFor="">Ürün image url</label>
                <input type="text"/><br/><hr/>
                <label htmlFor="">Ürün Başlığı</label>
                <input type="text"/><br/><hr/>
                <label htmlFor="">Ürün Fiyatı</label>
                <input type="text"/><br/><hr/>
            </div>
        )
    }
}
