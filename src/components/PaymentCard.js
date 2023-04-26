import React, { useState } from "react";

const PaymentCard = ({ img, amount }) => {
  const [showNumInput, setShowNumInput] = useState(true);
  const [input, setInput] = useState("");
  const text = `Merchant: Merchent Name
                Invoice no: 21279610
                Amount: BDT ${amount}`;
  const label = showNumInput ? "Your Bkash Account Number" : "PIN";
  const type = showNumInput ? "text" : "password";
  return (
    <div className="max-w-lg mx-auto m-20 bg-pink-600 flex py-5 gap-y-5 flex-col text-white justify-center">
      <div className="flex justify-center bg-white">
        <img className="w-10/12" src={img} />
      </div>
      <div className="whitespace-pre-line  shadow-xl text-center  py-3 m-5 rounded-xl">
        {text}
      </div>
      <div className="flex flex-col gap-y-2 justify-center ">
        <div className="flex justify-center">
          <label>{label}</label>
        </div>
        <div className="flex justify-center">
          <input
            type={type}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="border rounded-lg text-black p-2 w-6/12"
            placeholder={`${showNumInput ? "e.g 01XXXXXXXXX" : "PIN"}`}
          />
        </div>
      </div>

      <div
        className={`${showNumInput ? "flex" : "hidden"} justify-center gap-x-2`}
      >
        <input
          type="checkbox"
          className="border rounded-lg p-2"
          placeholder="e.g 01XXXXXXXXX"
        />
        <label>I agree to the terms and conditions</label>
      </div>
      <div className={`${showNumInput ? "flex" : "hidden"} justify-center`}>
        <button
          onClick={() => {
            setShowNumInput(false);
            setInput("");
          }}
          className="bg-pink-800 px-3 py-2"
        >
          PROCEED
        </button>
      </div>
      <div className={`${showNumInput ? "hidden" : "flex"} justify-center`}>
        <button className="bg-pink-800 px-3 py-2">CONFERM</button>
      </div>
    </div>
  );
};

export default PaymentCard;
