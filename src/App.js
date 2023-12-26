
import './App.css';
import { Routes,Route } from "react-router-dom"
import NAVBAR from './navbar/navbar';
import HOME from './pages.js/home';
import ABOUT from './pages.js/about';
import SERVICES from './pages.js/services';
import WHO from './pages.js/who we are';
import LET from './pages.js/never';
import FL from './pages.js/flora';
import PR from './pages.js/protect';
import FOOT from './pages.js/footer';
import LOGIN from './pages.js/login';
import Register from './pages.js/register';
import Donate from './pages.js/donate';
import Contribute from './pages.js/contribute';
import Jsonserver from './jasonserver';
import Update from './pages.js/update';
import Create from './pages.js/create';
import Read from './pages.js/read';
import Rhino from './pages.js/rinho';










function APP(){

  return(
    <div>
  <div className="App">
  <NAVBAR/>
    <Routes>
    <Route path='/' element= {<HOME/>}/>
    <Route path='about' element= {<ABOUT/>}/>
    <Route path='services' element= {<SERVICES/>}/>
    <Route path='who we are' element= {<WHO/>}/>
    <Route path='never' element= {<LET/>}/>
    <Route path='flora' element= {<FL/>}/>
    <Route path='protect' element= {<PR/>}/>
    <Route path='login' element= {<LOGIN/>}/>
    <Route path='who we are' element= {<WHO/>}/>
    <Route path='services' element= {<SERVICES/>}/>
    <Route path='register' element= {<Register/>}/>
    <Route path='donate' element= {<Donate/>}/>
    <Route path='Contribute' element= {<Contribute/>}/>
    <Route path='about' element= {<ABOUT/>}/>
    <Route path='/json' element= {<Jsonserver/>}/>
    <Route path='/update/:id' element= {<Update/>}/>
    <Route path='/create' element= {<Create/>}/>
    <Route path='/read/:id' element= {<Read/>}/>
   
    <Route path='rhino' element= {<Rhino/>}/>
    
    
   

  
    </Routes>
    <FOOT/>
    
    
  

  </div>
  </div>
   
  
   
   
   
  )
}
export default APP