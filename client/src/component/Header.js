import React from 'react'
import Home from './Home'

function Header() {
  return (
    <div>
<div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/image/books1.jpg" className="d-block w-100" style={{height:"600px"}} alt="" />
    </div>
    <div className="carousel-item">
      <img src="/image/books2.jpg" className="d-block w-100" style={{height:"600px"}} alt="" />
    </div>
    <div className="carousel-item">
      <img src="/image/books3.jpg" className="d-block w-100" style={{height:"600px"}} alt="" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
 <Home/>
    </div>
  )
}

export default Header