import './SearchBar.css';

import React, { Component } from 'react';
import { GiBastet, GiPaw } from "react-icons/gi";

export class SearchBar extends Component {
  render() {
    return (
       <div className="menu_style">
            <p className="name_of_app">BASTET<GiBastet /></p>
        <div className="searchbar_style">
            <input type="text" placeholder="Search a topic"/>
            <button className="search_button_style"><GiPaw/></button>
        </div>
       </div>
    )
  }
}

export default SearchBar;
