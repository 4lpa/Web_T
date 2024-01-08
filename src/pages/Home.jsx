import React from 'react'
import Navbar from "../components/Navbar";
import LandingBody from "../components/LandingBody";
import Analytics from "../components/Analytics";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
    <Navbar/>
    <LandingBody/>
    <Analytics/>
    <NewsLetter/>
    <Footer/>
  </div>
  )
}

export default Home