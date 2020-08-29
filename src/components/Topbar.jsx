import React from "react";
import {FaFacebookF, FaViber} from 'react-icons/fa'
import {MdCall} from 'react-icons/md'

function Topbar(props) {
  return (
    <nav class=" navbar navbar-dark bg-light">
      <div class="icons">
      <FaFacebookF/>
      <FaViber/>
      </div>
      <div class='cname'>
        <MdCall/><h6>+977-9841234567</h6>

      </div>
      
</nav>

    
  );
}

export default Topbar;
