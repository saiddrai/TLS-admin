import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';   
import SearchBar from './components/Searchbar/SearchBar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {


  
  return (
  <div className= "App" >
      <Navbar/>
    <div className="maindiv">
    <SearchBar/>

    <BrowserRouter>
    <Routes> 
      <Route path = "/" element={ < div  >
      <Dashboard/> 
      </div>} />
    </Routes>
    </BrowserRouter>

    
    <div className="pagesSwitch">
                <button className="button" style={{
                    width: "16%",
                    borderBottom:"solid  4px"
                }} ></button>
                <button className="button" style={{
                  width: "16%",
                  borderBottom:"solid   4px"
                }}></button>
            </div> 
    </div>
  </div>
  );
}

export default App;
