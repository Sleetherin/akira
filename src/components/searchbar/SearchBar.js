import './SearchBar.css';

import React, { Component } from 'react';
import { GiBastet } from "react-icons/gi";

export class SearchBar extends Component {
  render() {
    return (
       <div className="menu_style">
            <p className="name_of_app">BASTET<GiBastet /></p>
        <div className="searchbar_style">
            <input type="text" placeholder="Search a topic"/>
            <button width="100">Search</button>
        </div>
       </div>
    )
  }
}

export default SearchBar;
