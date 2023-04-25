import React, { useState } from "react";
import PaymentCard from "../components/PaymentCard";
import BhashLogo from "../images/Bkash_Payment.png";
import NagadLogo from "../images/Nagad-Logo.wine.png";

const PaymentPage = () => {
  const [showCard, setShowCard] = useState(false);
  const [img, setImg] = useState(BhashLogo);

  return (
    <div>
      <h1 className="pt-10 text-sky-500 text-3xl flex justify-center">
        Event Planning Payment
      </h1>
      <div
        className={`max-w-2xl mx-auto my-20  ${
          showCard ? "hidden" : "flex"
        } flex-col gap-y-3 justify-center`}
      >
        <h3 className="text-lg flex justify-center">Pay with</h3>
        <button
          onClick={() => {
            setShowCard(true);
          }}
          className="px-3 rounded-md text-white text-2xl py-2 bg-pink-600"
        >
          Bkash
        </button>
        <h3 className="text-lg flex justify-center">Or</h3>

        <button
          onClick={() => {
            setShowCard(true);
            setImg(NagadLogo);
          }}
          className="px-3 rounded-md text-white text-2xl py-2 bg-red-600"
        >
          Nagad
        </button>
      </div>
      {showCard && <PaymentCard img={img} />}
    </div>
  );
};

export default PaymentPage;
