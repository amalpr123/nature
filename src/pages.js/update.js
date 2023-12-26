import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {
    const[values,setValues]=useState({
        name:'',
       email:'',
        phone:'',
        password:''
      })
      const {id}=useParams();
    useEffect(()=>{
    axios.get('http://192.168.1.45:8000/display/'+id)
    
    
    .then(response=>{setValues(response.data)})
    .catch(err=>console.log(err))
    },[])
    const navigate=useNavigate()
    const handleUpdate=(()=>{
      axios.put('http://192.168.1.45:8000/update//'+id,values)
    .then(response=>{
      console.log(response);
      navigate('/json')
    })
    .catch(err=>console.log(err))
    })
  return (
    <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Update  A User</h1>
<form onSubmit={handleUpdate} >
<div className='mb-2'>
<label htmlFor='name'>Name:</label>
<input type='text' name='name' className='form-control' placeholder='enter name'
value={values.name}onChange={e=>setValues({...values,name:e.target.value})}

/>

</div>
    
<div className='mb-2'>
<label htmlFor='email'>Email:</label>
<input type='email' name='email' className='form-control' placeholder='enter email'
value={values.email}onChange={e=>setValues({...values,email:e.target.value})}

/>
</div>

<div className='mb-2'>
<label htmlFor='phone'>phone:</label>
<input type='phone' name='phone' className='form-control' placeholder='enter username'
value={values.phone}onChange={e=>setValues({...values,phone:e.target.value})}/>
</div>

<div className='mb-2'>
<label htmlFor='password'>password:</label>
<input type='password' name='password' className='form-control' placeholder='enter username'
value={values.password}onChange={e=>setValues({...values,password:e.target.value})}
/>

</div>
<button className='btn btn-success'>Update</button>
<Link  to='/json' className='btn btn-primary ms-3'>Back</Link>
</form>
    </div>
    

  </div>
  )
}

export default Update
