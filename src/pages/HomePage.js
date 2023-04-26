import React from "react";
import Accordion from "../components/Accordion";
import PackageList from "../components/PackageList";
const HomePage = () => {
  return (
    <div>
      <PackageList />
      <Accordion />
    </div>
  );
};

export default HomePage;
