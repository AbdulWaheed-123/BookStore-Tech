import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const customToastStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
  };
  const navigate=useNavigate();
  const empty={
      name:"",
      email:"",
      password:""
  }

const [handle,sethandle]=useState(empty)

const accounthandle=(e)=>{
const {name,value}=e.target;
sethandle({...handle,[name]:value})
console.log(handle)
}


const createUser=async()=>{
if(handle.name===""||handle.email===""||handle.password==="")
{ 
  // alert("Input fields must be filled!")
      toast.warn('Input fields must be filled!', {
        position: toast.POSITION.TOP_CENTER,autoClose: 3000,
        style: customToastStyle,
    });
}
else{
  let record=await fetch("http://localhost:4000/forms/signup",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(handle)
  })  
  record =await record.json()
  if(record==="Email already exists")
  {
  // alert("Email already exists")
  toast.error('Email already exists', {
    position: toast.POSITION.TOP_CENTER,autoClose: 3000,
    style: customToastStyle,
});
  }
  else{
    // alert("User created successfully")
    toast.success('User created successfully', {
      position: toast.POSITION.TOP_CENTER,autoClose: 3000,
      style: customToastStyle,
  });
  }
  navigate("/login")
}
}



  return (
    <>
    <div className="container py-5 mt-5">
   
<div className='col-md-4 col-sm-6 col-6 offset-4 mt-2'>



    <h3 className="text-center text-info fw-bolder pt-5">Create Your Account</h3>
      <div
        className="row justify-content-center align-items-center"
      >
       
              <h3 className="text-center fw-bolder text-info ">Signup Here</h3>
         
<div class="input-group mt-3">

<div class="input-group-addon">
<i class="fa fa-user ml-1 mt-2 text-info"></i>
 </div>
 
 <input name="name" type="text" class="form-control ml-2"  onChange={accounthandle} placeholder="Enter your name" />
</div>
 
 <div class="input-group mt-3">
 
 <div class="input-group-addon">
   <i class="fa fa-envelope mt-2 text-info"></i> 
  </div>
  
  <input class="form-control ml-2"  onChange={accounthandle} placeholder="Enter your email" name="email" type="email"/>
 </div>


 

  <div class="input-group mt-3">
  
  <div class="input-group-addon">
  <i class="fa fa-lock ml-1 mt-2 text-info"></i>
   </div>
   
   <input class="form-control ml-2" onChange={accounthandle} placeholder="Enter your password" name="password" type="text"/>
 </div> 

<button className='btn btn-info mt-3' onClick={createUser}>Signup</button>


              <div id="register-link" className="text-left">
              <p className='mt-4'>Already have an account</p>
                <Link to="/login"  className="text-primary">
                  Login here
                </Link>
              </div>
     </div>
      </div>
    </div>



</>
  )
}

export default Signup