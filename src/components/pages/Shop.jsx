import React from 'react';
import data from '../data.json'
import Products from '../Products';
import '..//pages/Shop.css';
import Filter from '../Filter';


class Menu extends React.Component{
    constructor(){
        super();
        this.state={
            products:data.products,
            size:"",
            sort:"",
        }
    }
    sortProducts=(event)=>{
        const sort=event.target.value;
    console.log(event.target.value);
    this.setState(state=>({
        sort:sort,
        products:this.state.products.slice().sort((a,b)=>(
            sort==="latest"?
            ((a.price > b.price)?1:-1):
            sort==="highest"?
            ((a.price < b.price)? 1:-1):
            ((a.price < b.price)? 1:-1)


        ))
    }))
    
    }
    filterProducts=(event) => {
        console.log(event.target.value);
        if(event.target.value===" "){
            this.setState({size:event.target.value , products:data.products});
        }else{
            this.setState({
                size:event.target.value ,
                product:data.products.filter(
                    (product)=> product.availableSizes.indexof(event.target.value)>=0
                ),
            });


        }
                

    };
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
                <Filter count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
               > </Filter>
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