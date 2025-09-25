import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import NewNavbar from './NewNavBar';  
import Segmentler from './Segmentler'; 

function Segment() {
  return (
    <>
     <Header />
     <div  style={{ marginTop: '60px', marginBottom: '80px' }}>  <Segmentler /></div>
    <Footer /> 
    </>
  )
}

export default Segment
