import React from 'react'
import Navbar from '../components/Navbar'
import Cusine from '../components/cusine'
import Card from '../components/card'
import "../styles/card.css"
export default function Menu() {
  return (
    <div>
      <section>
         <Navbar/>
      </section>
      <section>
         <Cusine/>
      </section>
      <section className='card--about1'>
        <Card/>
      </section>
    </div>
  )
}
