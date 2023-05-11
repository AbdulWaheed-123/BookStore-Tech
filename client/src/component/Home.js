import React from 'react'

function Home() {
  return (
    <div className='container mt-5'>
    <div className='row'> 
       <div className='col-md-6 mt-5'>
       <h1 className='mt-5 pt-3 font-weight-bold display-5 fw-bold'>WELCOME TO<br/>
       <span style={{color:"rgb(8,157,161)"}}>BOOK STORE</span></h1>

<p className='lead mt-3'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias atque laborum 
    non fuga ex deserunt. Exercitationem velit ducimus praesentium, obcaecati hic voluptate id 
    tenetur fuga illum quidem omnis? Rerum?
</p>
<button className='btn btn-primary mt-3'>Learn More</button>

</div>

  <div className='col-md-6 mt-5'>

   <img alt="" src='/image/table.png' className='image-fluid mt-5' style={{width:"95%"}}/>     
       </div>
       
       </div>

    </div>

  )
}

export default Home