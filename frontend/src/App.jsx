import './App.css';
import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';   
import SearchBar from './components/Searchbar/SearchBar';
import AccValidation1 from './components/Dashboard/AccValidation/AccValidation1';
import AccValidation2 from './components/Dashboard/AccValidation/AccValidation2/AccValidation2';
import { useState } from 'react/cjs/react.production.min';

function App() {

  
  
  return (
  <div className= "App" >
      <Navbar/>
    <div style = { {display:"flex",flexDirection:"column"} }>
      <SearchBar/>
      <div className="maindiv">
        <BrowserRouter>
          <h4> Account validation request #3</h4>

          <Routes> 
          <Route path = "/" element={ < div  >
            <AccValidation1/> 
            </div>} />

          <Route path='/left' element={  <AccValidation1/> } />
          <Route path='/right' element={  <AccValidation2/> } />
          </Routes>
          <div className="pagesSwitch">
      
                <Link to={"/left"}  className="link" > <button className='button' ></button></Link>
                <Link to={"/right"}   > <button className='button' ></button></Link>
          </div> 
        </BrowserRouter>

      </div>
    </div>
  </div>
  );
}
export default App;