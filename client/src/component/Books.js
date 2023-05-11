import { Link } from "react-router-dom"
import "./Book.css"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Books({data,book,onAdd}) {
  const navigate=useNavigate()
  const customToastStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
  };
  const msg=()=>{
    toast.success('Item Add To Cart Successfully', {
      position: toast.POSITION.TOP_CENTER,autoClose: 3000,
      style: customToastStyle,
    });
  }
    
  const [sessiondata,setsessiondata]=useState(null)
  const getSessiondata=()=>{
    setsessiondata(sessionStorage.getItem("userId"))
    setsessiondata(sessionStorage.getItem("userEmail"))
  }
  useEffect(()=>{
    getSessiondata()
},[])
  
  return (
    <>
   {sessiondata==null?(navigate("/login")):(  

  <div className="text-center container py-4">
  <h1 className='font-weight-bold display-6 text-center fw-bold'>Books</h1>
    <div className="row">
{data.map((item)=>(
      <div className="col-md-3 col-sm-6 col-12 mb-4">
        <div className="card" key={item._id}>
          <div
            className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
     
        <img
              src={`http://127.0.0.1:4000/${item.image}`} style={{height:"200px"}}
              className="w-100"
            />
       
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
           
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">{item.name}</h5>
            </a>
          
  <p>{item.description}</p>
          
            <h3 className="mb-3">{item.price}$</h3>
    {/* <Link to="/cart"> */}
    <button className='btn btn-outline-primary' onClick={()=>{onAdd(item);msg()}}>Add To Cart</button>
    {/* </Link>     */}
          </div>
        </div>
      </div>

))}

    </div>
   
  </div>
  )}
   
    </>


  
  )
}

export default Books