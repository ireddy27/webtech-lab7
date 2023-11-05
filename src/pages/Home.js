import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/card";
import Popular from "../components/popular";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <Popular/> 
      <Card/>

    </div>
  )
}
