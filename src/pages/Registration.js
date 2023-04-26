import React, { useState } from "react";
import "../../src/style.css";

const Registration = () => {
  const [firstName, setFirstName] = useState(null);
  const [Username, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "Username") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, Username, email, password, confirmPassword);
  };
  return (
    <div className="form my-24">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input border-2 px-2 rounded-sm"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="Username">
            Username{" "}
          </label>
          <input
            type="text"
            name=""
            id="Username"
            value={Username}
            className="form__input border-2 px-2 rounded-sm"
            onChange={(e) => handleInputChange(e)}
            placeholder="Username"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input border-2 px-2 rounded-sm"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input border-2 px-2 rounded-sm"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default Registration;
