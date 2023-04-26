import React from "react";
import { useLocation } from "react-router-dom";

const CheckOutPage = () => {
  const location = useLocation();
  return (
    <div class="container">
      <div class="left">
        <div class="info-box">
          <div class="receipt">
            Receipt for <br></br>
            <span>Event Planning</span>
          </div>
          <div class="entry">
            <i class="icon-wallet" aria-hidden="true"></i>
            <p className="p">
              Amount:<br></br>
              <span>${location.state.amount} BDT</span>
            </p>
          </div>
          <div class="entry">
            <i class="icon-calendar" aria-hidden="true"></i>
            <p className="p">
              Date:<br></br>
              <span>{new Date().toDateString()}</span>
            </p>
          </div>
          <div class="entry">
            <i class="icon-star" aria-hidden="true"></i>
            <p className="p">
              Issuer:<br></br>
              <span>Event Planning</span>
            </p>
          </div>
          <div class="entry">
            <i class="icon-notebook" aria-hidden="true"></i>
            <p className="p">
              Confirmation Nr:<br></br>
              <span>0YX123580219G</span>
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <div class="header">
            <img src={location.state.img} />
            <h4>{new Date().toDateString()}</h4>
          </div>
          <div class="main">
            <h3>Dribbble Pro Account (1 year)</h3>
            <h5>Total: ${location.state.amount} BDT</h5>
          </div>
          <div class="message">
            <p>
              Hello,<br></br>You sent a payment of ${location.state.amount} BDT
              to Event Planning
            </p>
            <h6>
              It may take a few moments for this<br></br>transaction to appear
              in your account.
            </h6>
          </div>
          <div class="footer">
            <h6>Invoice ID: 21279610</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
