import React, { useState } from "react";
import Accordion from "../components/Accordion";
import PackageList from "../components/PackageList";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = ({ user }) => {
  // const [user,setUser] = useState()
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h1 className="pt-10 text-sky-500 text-3xl flex justify-center">
        Event Planning
      </h1>
      <div className="flex justify-end pr-24">
        {console.log(location.state)}
        {!user ? (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="px-3 mb-5 rounded-md text-white text-lg py-2 bg-cyan-500"
          >
            Log in.
          </button>
        ) : (
          <h1>{user.name}</h1>
        )}
      </div>
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
