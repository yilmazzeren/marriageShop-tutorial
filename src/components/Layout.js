import React, { Component } from 'react'
import SearchResults from './SearchResults'

export default class Layout extends Component {
    render() {
        return (
            <div className="layout-wrapper">
                <SearchResults/>
            </div>
        )
    }
}
