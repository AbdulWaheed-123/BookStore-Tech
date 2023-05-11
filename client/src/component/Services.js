import React from 'react'
import "./Services.css"
function Services() {
  return (
    <div className='container mt-5'> 
    <div className='row'>
    <h1 className='mt-5 pt-3 font-weight-bold display-6 text-center fw-bold'>Services</h1>

        <div class="services_card col-12 col-md-3 col-sm-6">
            <i class="fa-solid fa-truck-fast"></i>
            <h3>Fast Delivery</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
        </div>

        <div class="services_card col-12 col-md-3 col-sm-6">
            <i class="fa-solid fa-headset"></i>
            <h3>24 x 7 Services</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
        </div>

        <div class="services_card col-12 col-md-3 col-sm-6">
            <i class="fa-solid fa-tag"></i>
            <h3>Best Deal</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
        </div>

        <div class="services_card col-12 col-md-3 col-sm-6">
            <i class="fa-solid fa-lock"></i>
            <h3>Secure Payment</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
        </div>

  
    </div>
    
    </div>
  )
}

export default Services