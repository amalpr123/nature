// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'

// function Read(){
//     const[data,setData]=useState([])
//   const {id}=useParams();
// useEffect(()=>{
// axios.get('http://localhost:8000/users/'+id)


// .then(response=>setData(response.data))
// .catch(err=>console.log(err))
// },[])
//     return(
//         <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
//             <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
//                 <h1>details of user</h1>
//                 <div className='mb-2'>
//                     <strong>name:{data.name}</strong>
//                 </div>
//                 <div className='mb-2'>
//                     <strong>email:{data.email}</strong>
//                 </div>
//                 <Link to= {`/update/${id}`} className='btn btn-success'>edit</Link>
//                 <Link to={'/json'} className='btn btn-primary ms-3'>back</Link>


//             </div>

//         </div>
//     )
 
// }
// export default Read
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function Read() {
    const[data,setData]=useState([])
    const {id}=useParams();
  useEffect(()=>{
  axios.get('http://192.168.1.45:8000/read/'+id)
  
  
  .then(response=>setData(response.data))
  .catch(err=>console.log(err))
  },[])
    return (
      <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
  <h1>Detail of User</h1>
  <div className='mb-2'>
  <strong>Name:{data.name}</strong>
  </div>
  <div className='mb-2'>
  <strong>Email:{data.email}</strong>
  </div>
  <div className='mb-2'>
  <strong>phone{data.phone}</strong>
  </div>
  <div className='mb-2'>
  <strong>password{data.password}</strong>
  </div>
  <Link  to={`/update/${id}`} className='btn btn-success'> Edit</Link>
  <Link  to='/' className='btn btn-primary ms-3'> Back</Link>
  
        </div>
        </div>
    )
  }
  
  export default Read