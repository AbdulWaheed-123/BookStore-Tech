import React from 'react'

function Blog() {
  return (
    <div className='container mt-5'>
    <h1 className='mt-5 pt-3 font-weight-bold display-6 text-center fw-bold'>Our Blog</h1>
    <div className="row">
<div className='col-md-4 col-sm-12 col-12'>
  
  <div className="card">
    <img src="/image/blog_1.jpg" style={{height:"230px"}} className="card-img-top" alt="..." />
    <div className="card-body">
    <h3  className="card-title fw-bolder text-info">Bloger</h3>
      <p className="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quos quis quasi ut impedit reiciendis voluptatem rem esse ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam repellat consequatur amet ducimus.
      </p>
    </div>
    <div className="card-footer text-info d-flex justify-content-between">
                        <i class="fa-solid fa-calendar-days"></i>
                        <i class="fa-solid fa-heart"></i>
    </div>
  </div>

</div>
<div className='col-md-4 col-sm-12 col-12'>
  <div className="card">
    <img src="/image/blog_2.jpg" style={{height:"230px"}} className="card-img-top" alt="..." />
    <div className="card-body">
    <h3  className="card-title fw-bolder text-info">Bloger</h3>
      <p className="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quos quis quasi ut impedit reiciendis voluptatem rem esse ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam repellat consequatur amet ducimus.
      </p>
    </div>
    <div className="card-footer text-info d-flex justify-content-between">
                        <i class="fa-solid fa-calendar-days"></i>
                        <i class="fa-solid fa-heart"></i>
    </div>
  </div>
</div>
  <div className='col-md-4 col-sm-12 col-12'>
  <div className="card">
    <img src="/image/blog_3.jpg" style={{height:"230px"}} className="card-img-top" alt="..." />
    <div className="card-body">
      <h3  className="card-title fw-bolder text-info">Bloger</h3>
      <p className="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quos quis quasi ut impedit reiciendis voluptatem rem esse ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam repellat consequatur amet ducimus.
      </p>
    </div>
    <div className="card-footer text-info d-flex justify-content-between">
                        <i class="fa-solid fa-calendar-days"></i>
                        <i class="fa-solid fa-heart"></i>
    </div>
  </div>
</div>
</div>

 
    </div>
  )
}

export default Blog