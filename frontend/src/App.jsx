import './App.css';
import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';   
import SearchBar from './components/Searchbar/SearchBar';
import AccValidation1 from './components/Dashboard/AccValidation/AccValidation1';
import AccValidation2 from './components/Dashboard/AccValidation/AccValidation2/AccValidation2';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  let home = false;
  return (
  <div className= "App" >
        <BrowserRouter>
      <Navbar/>
    <div style = { {display:"flex",flexDirection:"column"} }>
      <SearchBar/>
      <div className="maindiv">
          <h4> Account validation request #3</h4>

          <Routes> 
          <Route path = "/" element={ < div  >
            <Dashboard/> 
            </div>} />

          <Route path='/left' element={  <AccValidation1/> } />
          <Route path='/right' element={  <AccValidation2/> } />
          </Routes>
          { home && <div className="pagesSwitch">
      
                <Link to={"/left"}  className="link" > <button className='button' ></button></Link>
                <Link to={"/right"}   > <button className='button' ></button></Link>
          </div> }
      </div>
    </div>
        </BrowserRouter>

  </div>
  );
}
export default App;