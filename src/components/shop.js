import React from 'react';
import data from '../data.json';
import Products from './Products'


class Shop extends React.Component{
        constructor(){
    super();
    this.state={
        products:data.products,
        size:"",
        sort:""
    };
}

render(){

    return(
        <div class='grid-container'>
            <header>
                <a href="#">Shopping Cart</a>
            </header>
            <main>
                <div className='content'>
                <div class='main'> 
                <Products products={this.state.products}></Products>
                 </div>
                <div className='sidebar'>Cart Items</div>
        

                </div>
            </main>
        </div>
        
    );
}
}
export default  Shop;