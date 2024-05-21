import './App.css';

import SearchBar from './components/searchbar/SearchBar';
import Posts from './scrolling/posts/Posts';
import Topics from './scrolling/topics/Topics';




function App() {
  return (
    <div className="app">
      <SearchBar/>
      <div className="feed_style">
        <Posts/>
        <Topics/>
      </div>
    </div>
  );
}

export default App;
