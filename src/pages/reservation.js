import React from "react";
import Navbar from "../components/Navbar";
import Cafes from "../components/cafes";
import Card from "../components/card";
import "../styles/reserve.css"
export default function Reservation() {
    return (
      <div>
           <Navbar/>
           <Cafes/>
           <section className="res--card">
               <Card/>
            </section>
      </div>
    )
  }