import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Create(){
    const[value,setValues]=useState({
        name:'',
        email:'',
        phone:'',
        password:''
    })
    const navigate=useNavigate();
    const handleSubmit=((event)=>{
        event.preventDefault();
        axios.post('http://192.168.1.45:8000/register', value)
        .then(response=>{
            console.log(response);
            navigate('json')
        })
        .catch(err=>console.log(err))
    })

    return(
        
<div className='d-flex w-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>add a user</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor='name'>name:</label>
                <input type='name' name='name' className='form-control' placeholder='enter name' onChange={e=>setValues({... value,name:e.target.value})}></input>

            </div>
            <div className='mb-2'>
                <label htmlFor='email'>email:</label>
                <input type='email' name='email' className='form-control' placeholder='enter email' onChange={e=>setValues({... value,email:e.target.value})}></input>

            </div>

            <div className='mb-2'>
<label htmlFor='phone'>phone:</label>
<input type='phone' name='phone' className='form-control' placeholder='enter phone'
onChange={e=>setValues({...value,phone:e.target.value})}
/>

  </div>

  <div className='mb-2'>
<label htmlFor='password'>password:</label>
<input type='password' name='password' className='form-control' placeholder='enter password'
onChange={e=>setValues({...value,password:e.target.value})}
/>

  </div>
            <div>
                <button className='btn btn-success'>submit</button>
                <Link to='/json' className='btn btn-primary ms-3'>back</Link> 
                

            </div>'
            
            
        </form>

    </div>

</div>
       
    )
}




// function Create() {
//     const[values,setValues]=useState({
//       name:'',
//       email:''
//     })
//     const navigate=useNavigate();
//     const handleSubmit=((event)=>{
//   event.preventDefault();
//   axios.post('http://localhost:8000/users',values)
//   .then(response=>{
//     console.log(response);
//     navigate('/json')
//   })
//   .catch(err=>console.log(err))
//     })
//     return (
//       <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
//         <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
//           <h1>Add A User</h1>
//   <form onSubmit={handleSubmit}>
//     <div className='mb-2'>
//   <label htmlFor='name'>Name:</label>
//   <input type='text' name='name' className='form-control' placeholder='enter name'
//   onChange={e=>setValues({...values,name:e.target.value})}
//   />
  
//     </div>
//     <div className='mb-2'>
//   <label htmlFor='name'>Email:</label>
//   <input type='email' name='email' className='form-control' placeholder='enter email'
//   onChange={e=>setValues({...values,email:e.target.value})}
//   />
  
//     </div>
//     <button className='btn btn-success'>submit</button>
//     <Link  to='/json' className='btn btn-primary ms-3'>Back</Link>
//   </form>
//         </div>
        
  
//       </div>
//     )
//   }
export default Create