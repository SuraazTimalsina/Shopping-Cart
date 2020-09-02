import React from 'react';
import Banner from '../Banner';
import Display from '../Card';
import Video from '../Video';
import FooterNav from '../FooterNav'
import Navigation from '../Topbar'


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