import React from 'react'
import {useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Ship() {

    const customToastStyle = {
        backgroundColor: 'black',
        color: 'white',
        border: '2px solid white',
        borderRadius: '5px',
      };
      const msg=()=>{
        toast.success('Shippment Added Successfully', {
          position: toast.POSITION.TOP_CENTER,autoClose: 3000,
          style: customToastStyle,
        });
      }
        

     

    const empty = {
        name: "",
        address: "",
        city: "",
        country:""
      };
      //state for handling input
      const [shandle, ssetHandle] = useState(empty);
    
      // function for handle the input fields
      const shandler = (e) => {
        const { name, value } = e.target;
        ssetHandle({ ...shandle, [name]: value });
        console.log(shandle);
      };
    
      // function for creating the Api data
      const createShip = async()=>{
        msg()
         await fetch("http://localhost:4000/cship",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(shandle)
        })
   
      }
  return (
<>

    <div className="container py-5 mt-5">
   
<div className='col-md-4 col-sm-6 col-6 offset-4 mt-2'>



    <h3 className="text-center text-info fw-bolder pt-5">Shipping Address</h3>
      <div
        className="row justify-content-center align-items-center"
      >
       
           
         
<div class="input-group mt-3">

<div class="input-group-addon">
<i class="fa fa-user ml-1 mt-2 text-info"></i>
 </div>
 
 <input name="name" type="text" class="form-control ml-2" onChange={shandler}  placeholder="Enter full your name" />
</div>
 
 <div class="input-group mt-3">
 
 <div class="input-group-addon">
   <i class="fa-solid fa-house mt-2 text-info"></i> 
  </div>
  
  <input class="form-control ml-2"  onChange={shandler}   placeholder="Enter your address" name="address" type="text"/>
 </div>


 

  <div class="input-group mt-3">
  
  <div class="input-group-addon">
  <i class="fa-solid fa-city  mt-2 text-info"></i>
   </div>
   
   <input class="form-control ml-2"  onChange={shandler}  placeholder="Enter your city" name="city" type="text"/>
 </div> 
 <div class="input-group mt-3">
  
  <div class="input-group-addon">
  <i class="fa-solid fa-globe ml-1 mt-2 text-info"></i>
   </div>
   
   <input class="form-control ml-2"  onChange={shandler}  placeholder="Enter your country" name="country" type="text"/>
 </div> 

<Link to="/books">

<button className='btn btn-info mt-3' onClick={createShip} >Send</button>
</Link> 


           
     </div>
      </div>
    </div>

  

</>




   
  )
}

export default Ship