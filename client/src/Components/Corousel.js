import React from 'react'
import './Corousel.css'
function Corousel() {
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50" className="corousel__img d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg" className="corousel__img1 d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://m.media-amazon.com/images/I/71q2AtNKADL._SX3000_.jpg" className="corousel__img2 d-block w-100" alt="..." />
      </div>
    </div>
    <button className="prev carousel-control-prev my-lg-auto" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="next carousel-control-next  my-lg-auto" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Corousel