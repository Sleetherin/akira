import './SearchBar.css';

import React, { useState} from 'react';
import { GiBastet, GiPaw } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/postsSlice';

export const SearchBar = () => {

    const dispatch = useDispatch();
    const [chosenTopic, decideTopic] = useState("");


    const handleChange = (e) => {
      decideTopic(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(chosenTopic);
      dispatch(fetchPosts(chosenTopic.trim()));
      decideTopic("Meow!")
    }

    return (
      <div className="menu_style">
        <p className="name_of_app">AKIRA<GiBastet /></p>
        <p className="quote_of_app">A clever reddit for clever cats</p>
      <form onSubmit={handleSubmit} className="searchbar_style">
        <input type="text" 
        placeholder="Meow!"
        value={chosenTopic}
        onChange = {handleChange}
        />
        <button type="submit" className="search_button_style"><GiPaw/></button>
        </form>
       </div>
    )
  
}

export default SearchBar;
