  import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';   
import SearchBar from './components/Searchbar/SearchBar';
import AccValidation1 from './components/Dashboard/AccValidation/AccValidation1';
import AccValidation2 from './components/Dashboard/AccValidation/AccValidation2/AccValidation2';
import Dashboard from './components/Dashboard/Dashboard';
import { useState,useEffect } from 'react';

function App() {
  const [pages,setPages ] = useState(false);
  return (
  <div className= "App" >
        <BrowserRouter>
      <Navbar/>
    <div style = { {display:"flex",flexDirection:"column"} }>
      <SearchBar/>
      <div className="maindiv">
          <Routes> 
            <Route path = "/" element={ <Dashboard usage ="validate" setPages = {setPages} pages = {pages} /> } />
            
            <Route path='/left' element={ <><AccValidation1/>
              { <div id= "pages" className="pagesSwitch">
                <Link to={"/left"}  className="link" > <button className='button' ></button></Link>
                <Link to={"/right"}   > <button className='button' ></button></Link>
              </div> } </>  } />
            <Route path='/right' element={ <><AccValidation2/> 
              { <div id= "pages" className="pagesSwitch">
                <Link to={"/left"}  className="link" > <button className='button' ></button></Link>
                <Link to={"/right"}   > <button className='button' ></button></Link>
              </div> }</>} />

              <Route path="valid" element = { <Dashboard usage = "valid" /> } />
          </Routes>
      </div>
    </div>
        </BrowserRouter>

  </div>
  );
}
export default App;