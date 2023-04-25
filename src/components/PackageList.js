import React from "react";
import Package from "./Package";

import radisson from "../images/Radisson_Blu.jpg";
import PAN_PACIFIC from "../images/PAN_PACIFIC.jpg";
import Westin from "../images/Westin.jpg";

const PackageList = () => {
  const packages = [
    {
      hall: "RADISSON BLU DHAKA WATER GARDEN",
      img: radisson,
      guest: 1000,
      price: 600000,
    },
    {
      hall: "PAN PACIFIC   Sonargaon Hotel",
      img: PAN_PACIFIC,
      guest: 700,
      price: 400000,
    },
    {
      hall: "Westin",
      img: Westin,
      guest: 500,
      price: 250000,
    },
  ];
  const renderedPackages = packages.map((p) => (
    <Package hall={p.hall} img={p.img} guest={p.guest} price={p.price} />
  ));

  return <div className="flex flex-col p-10 gap-y-10">{renderedPackages}</div>;
};

export default PackageList;
