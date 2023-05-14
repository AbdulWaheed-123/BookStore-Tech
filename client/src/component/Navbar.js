import React from 'react'
import  "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar({CartItem}) {

  
  return (
    <div>
<nav className="navbar fixed-top bg-light navbar-expand-lg navbar-light" style={{borderBottom:"5px solid rgb(8,157,161)"}}>
  <Link className="navbar-brand" to="">
  <div class="logo ml-3 d-flex justify-content-around">
                <img src="image/logo.png" alt=''/>
                <h4 className='fw-bold ml-3 mt-3' style={{color:"#089da1"}}>BOOKLY</h4>
</div></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse mr-2" id="navbarNav">
    <ul className="navbar-nav  m-auto">
      <li className="nav-item active ">
        <Link className="nav-link " to="/"><span>Home </span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about"><span>About</span></Link>
      </li>
      <li className="nav-item active">
        <Link  className="nav-link" to="/books" ><span>Books</span></Link>
      </li>
      <li className="nav-item active">
        <Link  className="nav-link" to="/services" ><span>Services</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/reviews" ><span>Reviews</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/blog" ><span>Blog</span></Link>
      </li>
    </ul>

            <div className='social mr-5' style={{color:"rgb(8,157,161)"}}>
            <span class="dropdown">
              <button
                style={{ border: "white", backgroundColor: "white" }}
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-user ml-3" style={{ color: "#089da1" }}></i>
              </button>
              <ul
                class="dropdown-menu dd"
                aria-labelledby="dropdownMenuButton1"
              >
              <li>
                  <Link to="/admin" class="dropdown-item">
                  <i class="fa fa-user" style={{color:"#089da1"}} ></i>   Admin 
                  </Link>
                </li>
                <li>
                  <Link to="/login" class="dropdown-item ml-3">
                 Login 
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={()=>sessionStorage.clear()}  class="dropdown-item ml-3" href=".">
                  Logout
                  </Link>
                </li>
              </ul>
   </span>
                {/* <i class="fa-solid fa-magnifying-glass mr-2"></i> */}
             <Link to="/cart" >
     
            <i class="fa-solid fa-shopping-cart ml-1" style={{color:"#089da1"}} ></i>
               <sup><span class="badge badge-pill badge-dark">{CartItem}</span></sup>
              
             </Link> 
                {/* <i class="fa-solid fa-heart ml-4"></i>
               <sup><span class="badge badge-pill badge-dark">2</span></sup>  */}
            </div>
  </div>
</nav> 
       </div>
  )
}

export default Navbar