import React from 'react'
import "./Reviews.css"
function Reviews() {
  return (
    <>
    <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    {/*---- Include the above in your HEAD tag --------*/}
    <section>
      <div className="container">
      <h1 className='mt-3 pt-3 font-weight-bold display-6 text-center fw-bold'>Reviews</h1>
        <div className="row">
         
          {/*Profile Card 4*/}
          <div className="col-md-3 mt-2">
            <div className="card profile-card-4">
              <div className="card-img-block">
              </div>
              <div className="card-body pt-5">
                <img
                  src="/image/review_1.png"
                  alt="profile-image"
                  className="profile"
                />
                <h5 className="card-title text-center">David Leo</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="icon-block text-center">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </div>
            </div>
           
          </div>
          <div className="col-md-3 mt-2">
            <div className="card profile-card-4">
              <div className="card-img-block">
              </div>
              <div className="card-body pt-5">
                <img
                  src="/image/review_2.png"
                  alt="profile-image"
                  className="profile"
                />
                <h5 className="card-title text-center">Gail Schmidt</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="icon-block text-center">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </div>
            </div>
           
          </div>
          <div className="col-md-3 mt-2">
            <div className="card profile-card-4">
              <div className="card-img-block">
              </div>
              <div className="card-body pt-5">
                <img
                  src="/image/review_3.png"
                  alt="profile-image"
                  className="profile"
                />
                <h5 className="card-title text-center">John Deo</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="icon-block text-center">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </div>
            </div>
           
          </div>
          <div className="col-md-3 mt-2">
            <div className="card profile-card-4">
              <div className="card-img-block">
              </div>
              <div className="card-body pt-5">
                <img
                  src="/image/review_4.png"
                  alt="profile-image"
                  className="profile"
                />
                <h5 className="card-title text-center">Angelina</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="icon-block text-center">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </div>
            </div>
           
          </div>



        </div>
      </div>
    </section>
  </>
  
  )
}

export default Reviews