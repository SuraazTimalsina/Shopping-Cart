import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Display extends Component {
  
  render() { 
    return (
        
      
<div class="container">
  {/* <h1 align='center'>Our Products</h1> */}
    <div class="row">
        <div class="col-sm-4">
            <div class="card">
            <a href='#' > <img class="card-img-top img-fluid" src="..//assests/smartphone.jpg" alt="Card image cap" cursor='pointer'></img></a>
                
            </div>
        </div>
        
        <div class="col-sm-4">
            <div class="card">
             <a href='#' > <img class="card-img-top img-fluid" src="..//assests/vibe.jpg" alt="Card image cap"></img> </a>
            </div>
        </div>
        
        <div class="col-sm-4">
            <div class="card">
            <a href='#' >    <img class="card-img-top img-fluid" src="..//assests/earphone.jpg" alt="Card image cap"></img></a>
                {/* <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div> */}
            </div>
        </div>
    </div>
    <br/>
    {/* <div class="row">
        <div class="col-sm-4">
            <div class="card">
            <a href='#' >  <img class="card-img-top img-fluid" src="..//assests/router.jpg" alt="Card image cap"></img></a>
                
            </div>
        </div>
        
        <div class="col-sm-4">
        
            <div class="card">
              <a href='#' > <img class="card-img-top img-fluid" src="..//assests/headphone.jpg" alt="Card image cap"></img></a>
            </div>
        </div>
        
        <div class="col-sm-4">
            <div class="card">
            <a href='#' >  <img class="card-img-top img-fluid" src="..//assests/smartphone.jpg" alt="Card image cap"></img></a>
                {/* <div class="card-block"> */}
                    {/* <h4 class="card-title">Card title</h4>
                    <p class="card-text">This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div> */}
            </div>
        // </div>
    // </div> */}
    


    
// </div>
      );
  }
}
 
export default Display ;