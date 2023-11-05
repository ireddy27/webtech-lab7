import React from "react";
import "../styles/cusine.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
const data = [
  {img:"/images/chinese.jpeg",
  key:1,
name:"Chinese" },
{img:"/images/continental.jpeg",
key:2,
name:"Continental" },
{img:"/images/french.jpeg",
key:3,
name:"French" },
{img:"/images/italiam.jpeg",
key:4,
name:"Italian" },
{img:"/images/korean.jpeg",
key:5,
name:"Korean" },
{img:"/images/mexican.jpeg",
key:6,
name:"Mexican" },
{img:"/images/mocktails.jpeg",
key:7,
name:"Mocktails" },
{img:"/images/coffees.jpeg",
key:8,
name:"Coffees" },
];
export default function Cusine(){
  function handleClick(item) {
    console.log(item);
  }
    return(<section className="cus">
      <input className="cus--search" type="text" placeholder="Search..."/>
        <div className="cus--rect">
        {data.map((item, index) => (
          <React.Fragment key={item.key}>
            <div className={`cus--whrect1`}>
              <img className="cus--img"
                src={item.img}
                alt={item.name}
                loading="lazy"
              />
              <p className={`cus--name`}>{item.name}</p>
              <button className={`cus--button`} onClick={() => handleClick(item)}>
                search
              </button>
            </div>
            {(index + 1) % 3 === 0 && <div key={`row-${index}`} className="cafe--row" />}
          </React.Fragment>
        ))}
        </div>
    </section>)
}