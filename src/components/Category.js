import React, { Component } from 'react'

export default class Category extends Component {

    render() {
        return (
            <div className="category-wrapper">
                <h3 className="category-title" >KATEGORİ</h3>
                <ul className="list-group">
                    <li className="list-group-item"><input className="asd" type="checkbox"/> Gelinlik</li>
                    <li className="list-group-item"><input type="checkbox"/> Davetiye</li>
                    <li className="list-group-item"><input type="checkbox"/> Fotoğraf</li>
                    <li className="list-group-item"><input type="checkbox"/> Nikah Elbisesi</li>
                    <li className="list-group-item"><input type="checkbox"/> Mekanlar</li>
                    <li className="list-group-item"><input type="checkbox"/> Gelin Çiçeği</li>
                    <li className="list-group-item"><input type="checkbox"/> Gelin Aksesuarları</li>
                    <li className="list-group-item"><input type="checkbox"/> Nikah Şekeri</li>
                    <li className="list-group-item"><input type="checkbox"/> Ayakkabı</li>
                </ul>
            </div>
        )
    }
}
