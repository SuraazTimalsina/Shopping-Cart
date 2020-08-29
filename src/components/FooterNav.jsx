import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterNav.css'

class FooterNavbar extends Component {
    
    render() { 
        return ( 
            <div class='footer-navbar'>
                <div class='container-fluid'>
                <div class='row'>
                    <div class=' col col-sm-2' >
                        <h5>Smartphone</h5>
                        <ul>REDMI NOTE 9 PRO</ul>
                        <ul>REDMI NOTE 9 </ul>
                        <ul>REDMI NOTE 8 PRO</ul>
                        <ul>REDMI NOTE 8</ul>
                        <ul>MI A3</ul>
                        <ul>REDMI 8A DUAL</ul>
                        <ul>VIVO Y21</ul>
                    </div>

                    <div class='col-sm-2'>
                        <h5>Headphone/Earphone</h5>
                        <ul>Airpods</ul>
                        <ul>SONY </ul>
                        <ul>Samsung</ul>
                        <ul>GRADO</ul>
                        <ul>BOSE</ul>
                    </div>

                    <div class='col-sm-2'>
                        <h5>Accessories</h5>
                        <ul>Mobile Cover</ul>
                        <ul>Tempered glass</ul>
                        <ul>Mouse</ul>
                        <ul>Keyboard</ul>
                        <ul>Router</ul>
                        <ul>Computer Parts</ul>
                    </div>

                    <div class='col-sm-2'>
                        <h5>Charger</h5>
                        <ul>Mobile Charger</ul>
                        <ul>Laptop Charger</ul>
                        <ul>ONEPlus Charger</ul>
                        <ul>IPhone Charger</ul>
                    </div>

                    

                    <div class='col-sm-2'>
                        <h5>BarPhone</h5>
                        <ul>NOKIA</ul>
                        <ul>LAVA</ul>
                        <ul>REALME</ul>
                        <ul>SAMSUNG</ul>
                    </div>

                    
                    
                </div>
                
                </div>
                <hr/>
            </div>
         );
    }
}
 
export default FooterNavbar;