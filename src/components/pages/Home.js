import React from 'react';
import Banner from '../Banner';
import Display from '../Card';
import Video from '../Video';
import FooterNav from '../FooterNav'
import Test from '..//test'
import Navbar from '../Navbar';
import Navigation from '../Topbar'
import Topbar from '../Topbar';


function Home(){
    return(
        <>
        <Navigation/>
        {/* <Navbar/> */}
         <Banner/> 
         <br/>
         <br/>
         
        <Display/> 
       <br/>
        <Video/>
        <br/>
        <FooterNav/>
        
        </>  
        
        );
}
export default Home;