import React from "react";
import "../styles/card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Card(){
    return(
        <section className="card">
        <div className="card--white">
            <img className="card--bgimage" src={process.env.PUBLIC_URL +"/images/cups.png"} loading="lazy"></img>
        </div>
        
        <div className="card--rect"></div>
        <div className="card--content">
          <p className="card-about">About Us</p>
          <p className="card-sentence">We believe that everyone deserves to have a great cup of coffee, and we're here to help you find the perfect place to get it. 
            Whether you're looking for a cozy spot to study or a lively place to meet up with friends, we have a cafe for you.</p>
        </div>
        <img className="card--cafe" src={process.env.PUBLIC_URL +"/images/image1.jpeg"} loading="lazy"></img>
      </section>
    )
}