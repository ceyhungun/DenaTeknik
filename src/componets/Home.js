


import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

function Home() {
  return (
    <>
      <Header />

      <div className="banner relative w-full h-[80vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
         <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;



