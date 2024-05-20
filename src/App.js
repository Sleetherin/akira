import './App.css';
import Post from './components/post/Post';
import SearchBar from './components/searchbar/SearchBar';




function App() {
  return (
    <div className="app">
      <SearchBar/>
      <Post/>
    </div>
  );
}

export default App;
