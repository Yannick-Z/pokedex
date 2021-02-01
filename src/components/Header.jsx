import './Header.css';
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <span>Logo</span>
          <h1>{this.props.titre}</h1>
          <span>Menu</span>
        </header>
      </div>
    )
  }
}

