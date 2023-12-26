import React from 'react';
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";



function FOOT(){
    return(
<footer  >
  <div class="social">
  
  <img  style={{height:"120px",width:"300px",marginTop:"150px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Noyt5WQzSaiOwWh9ziAX1iydUdF7Wf_zgMaFwSExgWDUU2lN'></img>
  <h5 style={{marginTop:"50px"}}><b>contact@connectedplanetfoundation.com</b></h5>
    <ul class="wrapper" style={{marginTop:"70px"}}>
      <a href="#" target="_blank">
        <li class="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <span><i class="fab fa-linkedin"></i></span>
        </li>
      </a>
     
      <a href="#" target="_blank">
        <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <span><i class="fab fa-facebook-f"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span><i class="fab fa-instagram"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon twitter">
          <span class="tooltip">Twitter</span>
          <span><i class="fab fa-twitter"></i></span>
        </li>
      </a>
      
    </ul>
  </div>
  <div class="final_text"></div>
  <p>
©2021 by Connected Planet Foundation &copy;Proudly created with nature wellbeing
  </p>
</footer>
    )
}
export default FOOT