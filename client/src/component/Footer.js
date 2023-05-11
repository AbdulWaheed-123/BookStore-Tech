import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='container pt-5 mt-5'>
<div className='row'>
   

<div className='col-md-4 col-sm-6 col-12 '>
<div class="tag">
    <img src="image/logo.png" alt='' />
    <h5 className='fw-bold  mt-2' style={{color:"#089da1"}}>BOOKLY</h5>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quaerat ipsa aspernatur ad 
        sequi, dolore eveniet vitae quasi. Excepturi ipsa odio impedit sequi at hic velit, minus 
        vero sint. Voluptas?
    </p>

</div>
</div>
<div className='col-md-2 col-sm-6 col-12'>
<div class="tag">
    <h1>Quick Link</h1>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Featured</a>
    <a href="#">Arrivals</a>
    <a href="#">Reviews</a>
    <a href="#">Blog</a>
    
</div>
</div>

<div className='col-md-2 col-sm-3 col-12'>
<div class="tag">
    <h1>Contact Info</h1>
    <a href="#"><i class="fa-solid fa-phone"></i>+94 12 345 6789</a>
    <a href="#"><i class="fa-solid fa-phone"></i>+94 32 444 699</a>
    <a href="#"><i class="fa-solid fa-envelope"></i>book@gmail.com</a>
    
</div>
</div>

<div className='col-md-2 col-sm-3  col-12'>
<div class="tag">
    <h1>Follow Us</h1>
    <div class="social_link">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>
    
</div>
</div>
<div className='col-md-2 col-sm-6 col-12'>
<div class="tag">
    <h1>Newsletter</h1>
    
        <input type="text" className='border border-primary rounded-pill' placeholder="Your email id here" />
        <button  className='btn btn-primary mt-2 rounded-pill' type="submit">Subscribe</button>
               
</div>   
</div>

    </div>


<p class="end">Design By<span><i class="fa-solid fa-face-grin"></i> WT Master Code</span></p>


    
    </div>
  )
}

export default Footer