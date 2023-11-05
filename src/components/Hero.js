import React from "react"
import "../styles/hero.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Hero(){
  
    return(<section className="hero">
      <div className="hero--section">
                <img className="hero--image" src={process.env.PUBLIC_URL+"/images/coffeebeans.png"} loading="lazy"/>
                <img className="hero--image1" src={process.env.PUBLIC_URL+"/images/collage.jpeg"} loading="lazy"/>
                <h1 className="hero--head1">Find Your</h1>
                <h1 className="hero--head2">- favourite cafè</h1>
                <p className="hero--sent">Don't be confused looking for a cafe for now, you are lucky to open our platform, just look for the cafe you want to visit.</p>
            </div>
    </section>)
}