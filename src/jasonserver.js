import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Jsonserver() {
const navigate=useNavigate();
const[data,setData]=useState([])
useEffect(()=>{
axios.get('http://192.168.1.80:8000/display')


.then(response=>setData(response.data))
.catch(err=>console.log(err))
},[])
const handleDelete=((id)=>{
  const confirm=window.confirm("would you like to Delete this data?");
  if(confirm){
    axios.delete('http://192.168.1.80:8000/delete/'+id)
    .then(res=>{
      navigate('/create1');

    }).catch(err=>console.log(err));
  }
})
return (
<div className='d-flex justify-content-center align-items-center bg-light vh-100' style={{marginTop:"220px",marginLeft:"-100px"}}>
  
  <div className='w-75 rounded bg-white border shadow p-4' >
    <div className='d-flex justify-content-end'>
      <Link to='/create' className='btn btn-success'>Add+</Link>
      </div>
    <table className='table table-striped' >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>phone</th>
                <th>password</th>
              
               
              
            </tr>
        </thead>
        <tbody>
            {data.map((d,i)=>{
                return<tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td>{d.password}</td>
                   
 
                    <td>
                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-primary me-2' style={{width:"80px"}}>read</Link>
                    {/* <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link> */}
                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2' style={{width:"80px"}}>Update</Link>
                    <button onClick={ e=>handleDelete(d.id)} className='btn btn-sm btn-danger'style={{width:"80px"}}>Delete</button>
                    </td>
                </tr>
            })}
        </tbody>
      
    </table>
    </div>
</div>
)

}

export default Jsonserver
    


