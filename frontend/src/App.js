import './App.css';
import Navbar from './components/Navbar/Navbar';   
import SearchBar from './components/Searchbar/SearchBar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='maindiv' >
      <SearchBar />
      <Dashboard />
      </div>
    </div>
  );
}

export default App;
