import React from "react";
import { useNavigate } from "react-router-dom";
const Package = ({ hall, img, guest, price }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div class="photo">
        <img src={img} />
      </div>
      <div class="description">
        <h2>{hall}</h2>
        <h4>Engagement, Wedding Ceremony, Wedding Reception</h4>
        <p>Wednesday, April 30, 2023</p>
        <h1>${price}</h1>
        <p>
          Shahi Kacchi Biriyani, Chicken Roast/ Chicken Tandori, Beef Kofta
          Curry, Mutton Rezala
        </p>
        <p>
          Menu for {guest} People + Complete Decoration + Photography + Video
          Story + Hall Rent
        </p>
        <button
          className="button"
          onClick={() =>
            navigate("/payment", { state: { amount: price, hall: hall } })
          }
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Package;
