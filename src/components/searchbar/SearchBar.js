import './SearchBar.css';

import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
       <div className="menu_style">
            <p className="name_of_app">BASTET</p>
        <div className="searchbar_style">
            <input type="text" placeholder="Search a topic"/>
            <button>Search</button>
        </div>
       </div>
    )
  }
}

export default SearchBar;
