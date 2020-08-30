import React from 'react';
import data from '../data.json'
import Products from '../Products';
import '..//pages/Shop.css';


class Menu extends React.Component{
    constructor(){
        super();
        this.state={
            products:data.products,
            size:"",
            sort:"",
        }
    }
    render(){
    return(
        <>
<div className='grid-container'>
    <header>
        <a href='/'>Shopping Cart</a>
    </header>
    <main>
        <div className='content'>
            <div className='main'>
                <Products products={this.state.products}/>
            </div>
            <div className='sidebar'>
                Cart Items

            </div>
        </div>
    </main>
    <footer>
        All right Reserved
    </footer>
    </div>        </>
    
    );
}
}
export default Menu;