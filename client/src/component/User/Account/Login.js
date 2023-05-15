import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function Login() {
  const customToastStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
  };
  const navigate=useNavigate()
    const empty={
      email:"",
      password:""
  }

const [handle,sethandle]=useState(empty)

const loginhandle=(e)=>{
const {name,value}=e.target;
sethandle({...handle,[name]:value})
console.log(handle)
}


const LoginUser=async()=>{
if(handle.email===""||handle.password==="")
{ // alert("Input fields must be filled!")
  toast.warn('Input fields must be filled!', {
    position: toast.POSITION.TOP_CENTER,autoClose: 3000,
    style: customToastStyle,
});}
else{
  let record=await fetch("http://localhost:4000/forms/login",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(handle)
  })  
  record =await record.json()
  if(record.message==="Login successfully")
  {
      sessionStorage.setItem("userId",record.userlogin._id)
      sessionStorage.setItem("userEmail",record.userlogin.email)
      // alert("Login successfully")
       toast.success('Login successfully', {
        position: toast.POSITION.TOP_CENTER,autoClose: 3000,
        style: customToastStyle,
    });
      navigate("/books")
  }
  else{
      // alert("Username or password is invalid")
      toast.error('Username or password is invalid', {
        position: toast.POSITION.TOP_CENTER,autoClose: 3000,
        style: customToastStyle,
    });
  }
}
}



  return (
<>
    <div className="container mt-5 py-5">
    <div className='col-md-4 col-sm-6 col-6 offset-4  mt-5'>
    <h3 className="text-center text-info fw-bolder pt-5">Welcome To Login Page</h3>
      <div
        
        className="row justify-content-center align-items-center"
      >

        
              <h3 className="text-center fw-bolder text-info ">Login Here</h3>
              
 
  <div class="input-group">
  
  <div class="input-group-addon mt-3">
	<i class="fa fa-envelope  text-info"></i> 
   </div>
   
   <input class="form-control mt-1 ml-2" onChange={loginhandle} placeholder="Enter your email" name="email" type="email"/>
  </div>


 

  <div class="input-group mt-3">
  
  <div class="input-group-addon">
  <i class="fa fa-lock ml-1 mt-2 text-info"></i>
   </div>
   
   <input class="form-control ml-2" onChange={loginhandle} placeholder="Enter your password" name="password" type="password"/>
  </div>



<button className='btn btn-info mt-3' onClick={LoginUser}>Login</button>
              <div id="register-link" className="text-left">
              <p className='mt-4'>Don't have an account</p>
                <Link to="/signup" className="text-primary">
                  Register here
                </Link>
              </div>
          
        </div>
      </div>
    </div>



</>



  )
}

export default Login