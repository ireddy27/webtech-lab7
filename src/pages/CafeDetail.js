// CafeDetail.js
import React from "react";
import "../styles/cafedetail.css"
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import Card from "../components/card";
import ReservationForm from "../components/form";
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

const CafeDetail = () => {
  const { id } = useParams();

  // Find the cafe based on the id (assuming id matches the name property)
  const cafe = data.find((item) => item.name.toLowerCase() === id.toLowerCase());

  // If cafe is not found, you can handle it accordingly
  if (!cafe) {
    return <p>Cafe not found!</p>;
  }

  return (
    <div>
      <Navbar/>
      <h2 className="cd--name">{cafe.name}</h2>
      <div className="horizontal-container">
      <div>
        <ReservationForm />
      </div>
      <div className="cd-details">
        <div className="cd--rect">
          <img className="cd--photo" src={cafe.photo} alt={cafe.name} />
        </div>
        <div className="cd-info">
          <ol>
            <li className="cd--rating">Rating: {cafe.rating}</li>
            <li className="cd--availability">Availability: {cafe.availability}</li>
          </ol>
        </div>
      </div>
    </div>

      <Card/>
    </div>
  );
};

export default CafeDetail;