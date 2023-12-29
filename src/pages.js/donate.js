// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import React, { useState } from 'react'
// import './donate.css';
// function Donate(){
//     const Navigate=useNavigate();
//     const first=(()=>{
//       Navigate('/Contribute')   
//     })

//     const url = 'http://192.168.1.80:8000/donate';
//     const [data,setData]=useState({
//         name:'',
//         email:'',
//         phone:'',
//         address:'',
       
    

//     });
     
//     const handle =(a) =>{
//         const newData={...data};
//         newData[a.target.id] =a.target.value;
//         setData(newData);
//     };

//     const handlesubmit =(e) =>{
//         console.log(JSON.stringify(data))
//         e.preventDefault();
//         if(!data.name|| !data.email || !data.phone || !data.address  )
//         {
//             alert("please fill in all the fields");
//             return;
//         }

//         Navigate ('/Contribute');
        
//         var form = new FormData();
//         form.append('name',data.name);
//         form.append('email',data.email);
//         form.append('phone',data.phone);
//         form.append('address',data.address);
        

//         axios
//         .post(url,form,{
//             headers:{'Content-Type':"multipart/form-data"},
//         })
//         .then((response) => {
//             console.log(response.data);
//             setData({...data,id: e.target.value})
//     });

//     };

//     return(
// //       <div>
// //       <div className="container-fluid">
// // <div className="row main-content bg-success text-center">
// //   <div className="col-md-4 text-center company__info">
// //       <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
      

// //   </div>
// //   <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
// //       <div className="container-fluid">
// //           <div className="row">
             
// //           </div>
// //           <div className="row">
// //               <form onSubmit={(e)=>handlesubmit(e)} control="" className="form-group">
// //                   <div className="row">
// //                       <input onChange={(e,name)=>handle(e,name)} type="text" name="name" id="name" value={data.name} className="form__input" placeholder="Your name"/>
// //                   </div>
// //                   <div className="row">
// //                       <input onChange={(e,email)=>handle(e,email)} type="text" name="email" id="email" value={data.email} className="form__input" placeholder="your email"/>
// //                   </div>
// //                   <div className="row">
// //                       <input onChange={(e,phone)=>handle(e,phone)} type="phone" name="phone" id="phone" value={data.phone} className="form__input" placeholder="your phone number"/>
// //                   </div>
// //                   <div className="row">
// //                       <input onChange={(e,phone)=>handle(e,phone)} type="address" name="address" id="address" value={data.address} className="form__input" placeholder="your address"/>
// //                   </div>
                  
                
                 
              
                  
// //                   <div className="row" style={{marginLeft:"-220px"}}>
// //                       <input type="submit" onClick={handlesubmit} value="Submit" class="btn"/>
// //                   </div>
// //               </form>
// //           </div>
        
// //       </div>
// //   </div>
// // </div>
// // </div>


// // </div>

// <div class="login-container">
// 	<form action="" class="form-login" onSubmit={(e)=>handlesubmit(e)}>
// 		<ul class="login-nav">
			
// 			<li class="login-nav__item">
// 				<a href="#">Donate</a>
// 			</li>
// 		</ul>
		
// 		<label for="login-input-name" class="login__label">
// 			name
// 		</label>
//         <input id="name" name='name' class="login__input" type="text" onChange={(e,name)=>handle(e,name)} value={data.name} />

// 		<label  for="login-input-email" class="login__label">
// 			email
// 		</label>     
// 		<input name='email' id="email" class="login__input" type="email" onChange={(e,email)=>handle(e,email)} value={data.email} />

//         <label for="login-input-phone" class="login__label">
// 			phone
// 		</label>     
// 		<input name='phone' id="phone" class="login__input" type="phone" onChange={(e,phone)=>handle(e,phone)} value={data.phone} />

//         <label for="login-input-address" class="login__label">
// 			address
// 		</label>     
// 		<input name='address' id="address" class="login__input" type="address"  onChange={(e,address)=>handle(e,address)} value={data.address} />

// 		<label for="login-sign-up" class="login__label--checkbox">
			
// 		</label>
// 		<button onClick={handlesubmit} class="login__submit" >contribute</button>
// 	</form>	
	

// </div>

//     )
// }
// export default Donate



function Donate(){
    return(
        <>
        <h1>donate </h1>
        </>
    )
}
export default Donate
