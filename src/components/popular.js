import React from "react"
import "../styles/popular.css"
import { LazyLoadImage } from "react-lazy-load-image-component"

export default function Popular(){
    return(
    <section className="pop">
        <div className="pop--rect"></div>
        <div className="pop--wrect1"></div>
        <div className="pop--whrect1"></div>
        <img className="pop--cafe1" src={process.env.PUBLIC_URL+"/images/Chamiers.jpeg"}></img>
        <p className="pop--cname1">Name: Chamiers Cafe</p>
        <p className="pop--crate1">Rating: 4.5</p>
        <img className="pop--corder1" src= {process.env.PUBLIC_URL+"/images/cart.png"}></img>
        <div className="pop--wrect2"></div>
        <div className="pop--whrect2"></div>
        <img className="pop--cafe2" src={process.env.PUBLIC_URL+"/images/Amethyst.jpeg"}></img>
        <p className="pop--cname2">Name: Amethyst Cafe</p>
        <p className="pop--crate2">Rating: 4.5</p>
        <img className="pop--corder2" src= {process.env.PUBLIC_URL+"/images/cart.png"}></img>
        <div className="pop--wrect3"></div>
        <div className="pop--whrect3"></div>
        <img className="pop--cafe3" src={process.env.PUBLIC_URL+"/images/Kiplings.jpeg"}></img>
        <p className="pop--cname3">Name: Kiplings Cafe</p>
        <p className="pop--crate3">Rating: 4.5</p>
        <img className="pop--corder3" src= {process.env.PUBLIC_URL+"/images/cart.png"}></img>
        
    </section>)
}