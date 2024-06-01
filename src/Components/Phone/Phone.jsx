import React from "react";
import "./Phone.css";

function Phone() {
  return (
    <>
      <div className="phone">
        <div className="phoneHeader">
          <h3>Current balance</h3>
          <h2>$4658.50</h2>
        </div>
        <div
          className={`p-2.5 px-[25px] h-[18vh] w-[14.5vw] py-[20px] text-white rounded-lg relative`}
          style={{ backgroundColor: "#29323c" }}
        >
          <div>
            <h1 className="text-md font-semibold">banquee.</h1>
          </div>
          <div>
            <h1 className="mt-[0.5px] text-[1em] font-mono">
              1234 1234 1234 1234
            </h1>
          </div>
          <div className="flex flex-row py-2.5 relative top-0">
            <div className="mx-2.5">
              <h3 className="text-[0.5em]">Card Holder</h3>
              <h2 className="text-sm">John Doe</h2>
            </div>
            <div className="mx-2.5">
              <h3 className="text-[0.5em]">Expiry Date</h3>
              <h2 className="text-sm">09/28</h2>
            </div>
          </div>
        </div>
        <div className="sendRecieve">
          <h2>Send Money</h2>
          <h2>Recieve Money</h2>
        </div>
        <div className="transactions">
          <h2 id="transactions">Transactions</h2>
          <div className="transCard">
            <div className="transCardDetails">
              <h2>Apple</h2>
              <h3>Electronic</h3>
            </div>
            <div className="transCardPrice">
              <h2>-799$</h2>
            </div>
          </div>
          <div className="transCard">
            <div className="transCardDetails">
              <h2>Google Play Store</h2>
              <h3>Apps</h3>
            </div>
            <div className="transCardPrice">
              <h2>-49$</h2>
            </div>
          </div>
          <div className="transCard">
            <div className="transCardDetails">
              <h2>Amazon</h2>
              <h3>Shopping</h3>
            </div>
            <div className="transCardPrice">
              <h2>-59$</h2>
            </div>
          </div>
          <div className="transCard">
            <div className="transCardDetails">
              <h2>Twitter</h2>
              <h3>Ads</h3>
            </div>
            <div className="transCardPrice">
              <h2>-9$</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Phone;
