import React from "react";
import "../styles/cafes.css";
import { Link } from "react-router-dom";
const data = [
  {
    name: "Chamiers Cafe",
    rating: "4.5",
    key: 1,
    availability: "Yes",
    photo: "/images/Chamiers.jpeg",
  },
  {
    name: "Amethyst Cafe",
    rating: "4.5",
    key: 2,
    availability: "Yes",
    photo: "/images/Amethyst.jpeg",
  },
  {
    name: "Crafts Cafe",
    rating: "4.5",
    key: 3,
    availability: "Yes",
    photo: "/images/crafts.jpeg",
  },
  {
    name: "cafe de paris",
    rating: "4.5",
    key: 4,
    availability: "Yes",
    photo: "/images/cafe-de-paris.jpeg",
  },
  {
    name: "cafe de paris",
    rating: "4.5",
    key: 5,
    availability: "Yes",
    photo: "/images/cafe-de-paris.jpeg",
  },
  {
    name: "cafe de paris",
    rating: "4.5",
    key: 6,
    availability: "Yes",
    photo: "/images/cafe-de-paris.jpeg",
  },
  {
    name: "cafe de paris",
    rating: "4.5",
    key: 7,
    availability: "Yes",
    photo: "/images/cafe-de-paris.jpeg",
  },
  {
    name: "Chamiers Cafe",
    rating: "4.5", 
    key: 8,
    availability: "Yes",
    photo: "/images/Chamiers.jpeg",
  },
  {
    name: "Amethyst Cafe",
    rating: "4.5",
    key: 9,
    availability: "Yes",
    photo: "/images/Amethyst.jpeg",
  },
  {
    name: "Crafts Cafe",
    rating: "4.5",
    key: 10,
    availability: "Yes",
    photo: "/images/crafts.jpeg",
  },
  {
    name: "Chamiers Cafe",
    rating: "4.5",
    key: 11,
    availability: "Yes",
    photo: "/images/Chamiers.jpeg",
    
  },
  {
    name: "Crafts Cafe",
    rating: "4.5",
    key: 12,
    availability: "Yes",
    photo: "/images/crafts.jpeg",
  },
];

export default function Cafes() {
  function handleClick(item) {
    console.log(item);
  }

  return (
    <section className="cafe--back">
      <input className="cafe--search" type="text" placeholder="Search..." />
      <div className="cafe--card-container">
        {data.map((item, index) => (
          <React.Fragment key={item.key}>
            <div className={`cafe--card`}>
              <div className={`cafe--wrect`}></div>
              <img
                className={`cafe--cafe`}
                src={item.photo}
                alt={item.name}
              />
              <p className={`cafe--cname`}>Name: {item.name}</p>
              <p className={`cafe--crate`}>Rating: {item.rating}</p>
              <p className={`cafe--corder`}>Availability: {item.availability}</p>
              <Link to={`/cafe/${item.name}`}>
                <button className={`cafe--button`} onClick={() => handleClick(item)}>
                  Book
                </button>
              </Link>
            </div>
            {(index + 1) % 4 === 0 && <div key={`row-${index}`} className="cafe--row" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
