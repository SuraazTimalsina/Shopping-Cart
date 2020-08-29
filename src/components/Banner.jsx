import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, withRouter } from "react-router-dom";


function Banner (props) {

    return (
    
        <div className='navbar-banner'>
        <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar- bg-transparent fixed">
        <div class="container">
          <Link class="navbar-brand" to="/">
            INFER HERE        </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/try" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/try">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Shop" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Shop">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>



<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..//assests/ban.png" class="d-block w-100 " alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>First<span>slide label</span> </h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <p><a href='#'>More Info</a></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..//assests/bane.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second <span>slide label</span></h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><a href='#'>More Info</a></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..//assests/baner.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third <span>slide label</span> </h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        <p><a href='#'>More Info</a></p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 
</div>

      );
  
}
 
export default withRouter(Banner);
