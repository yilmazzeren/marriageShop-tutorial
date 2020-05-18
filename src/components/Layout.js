import React, { Component } from 'react'
import Category from './Category'
import SearchResults from './SearchResults'

export default class Layout extends Component {
    render() {
        return (
            <div className="layout-wrapper">
                <Category/>
                <SearchResults/>
            </div>
        )
    }
}
