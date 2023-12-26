import '../navbar.css'
import{Link }from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function NAVBAR(){
    return(
        <div>
     <nav className='navbar  sticky-top navbar-expand-lg  navbar-light '>
     <h1>beauty of nature</h1>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
     <div  class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     <li  className='Nav-item'>
          <Link to="/" style={{color:"black",textDecoration:"none"}}>Home</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="about" style={{color:"black",textDecoration:"none"}}>about</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="services" style={{color:"black",textDecoration:"none"}}>services</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="who we are" style={{color:"black",textDecoration:"none"}}>who we are</Link>
         </li>
         <li  className='Nav-item'>
         
          <div class="dropdown">
  <button style={{marginTop:"-7px"}} class="btn btn-green dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
 <b> documentaries</b>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="rhino"><b>RHINO</b></a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
         </li>
         <li  className='Nav-item'>
          <Link to="login" style={{color:"black",textDecoration:"none"}}>LOGIN</Link>
         </li>
         
         <li  className='Nav-item'>
          <Link to="json" style={{color:"black",textDecoration:"none"}}>user</Link>
         </li>
         
         
     </ul>
     </div>
     </nav>
     </div>
       
    )
}
export default NAVBAR