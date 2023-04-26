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
          onClick={() => navigate("/payment", { state: { amount: price } })}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Package;
