import React from "react";
import Accordion from "../components/Accordion";
import PackageList from "../components/PackageList";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="pt-10 text-sky-500 text-3xl flex justify-center">
        Event Planning
      </h1>
      <PackageList />
      <di className="flex justify-center">
        <button
          onClick={() => navigate("/event")}
          className="px-3 mb-5 rounded-md text-white text-2xl py-2 bg-red-600"
        >
          Create a Event
        </button>
      </di>
      <Accordion />
    </div>
  );
};

export default HomePage;
