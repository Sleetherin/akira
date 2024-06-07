import './App.css';

import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

import SearchBar from './components/searchbar/SearchBar';
import PostsFunction from './scrolling/posts/posts';
import Topics from './scrolling/topics/topics';


function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <SearchBar />
        <div className="feed_style">
          <PostsFunction subreddit="cats"/>
          <Topics/>
        </div>     
      </Provider>
    </div>
  );
}

export default App;
/*
<PostsFunction subreddit="reactjs"/>
*/