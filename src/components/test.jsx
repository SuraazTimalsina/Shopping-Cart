import React, { Component } from 'react';
import './test.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Test extends Component {
  
  render() { 
    return (
      
      <div className='shop-page' id='shop'>
              <h1>Hello</h1>
      </div>
      
//       <div>
//       <ul className="products">
//           {this.props.products.map(product=>{
//               <li key={product._id}>
//               <div className="product">
//                   <a href={"#"+ product._id}>
//                   <img src={product.image} alt='product.title'></img>
//                   <p>
//                   {product.title}
//                   </p>
//                   </a>
//                   <div className="product-price">
//                       <div>
//                           {product.price}
//                       </div>
//                       <button>Add to Cart</button>
//                   </div>
//               </div>
//               </li>
// })
// </ul>
//     </div>
      );
  }
}
 
export default Test ;