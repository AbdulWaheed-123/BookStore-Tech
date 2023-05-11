import React from 'react'

function About() {
  return (
    <div>
         <div className='container mt-5'>
    <div className='row'> 
  <div className='col-md-6'>
 
<img className='image-fluid mt-5 ml-5' src="image/about.png" alt='' style={{width:"70%"}}/>
 
       </div>
       
       <div className='col-md-6'>
       <h1 className='mt-5 pt-3 font-weight-bold display-6 fw-bold'>About us</h1>

<p className='lead mt-3'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis 
    architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? 
    Quis illum nostrum perspiciatis laboriosam perferendis? 
</p>

<button className='btn btn-primary mt-3'>Learn More</button>

</div>

       </div>

    </div>

    </div>
  )
}

export default About

