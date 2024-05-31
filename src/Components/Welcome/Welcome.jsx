import React from "react";
import "./Welcome.css";
import Card from "../Card/Card";

function Welcome() {
  const blackCard = {
    backgroundColor: "#29323c",
    top: "80px",
  };

  const goldCard = {
    backgroundColor: "#D6AE7B",
    top: "160px",
  };

  const blueCard = {
    backgroundColor: "#53A191",
    top: "0px",
  };

  return (
    <>
      <div className="welcome">
        <div className="welcome1">
          <div className="welcomeDetails">
            <h4>Features</h4>
            <h1>All in one card.</h1>
            <p>
              Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
              leo duis ut diam.
            </p>
          </div>
          <div className="welcomeButtons">
            <buttons className="welcomeBtn welcomeOpenAccount">
              Open Account
            </buttons>
            <buttons className="welcomeBtn welcomeCompare">
              Compare Cards
            </buttons>
          </div>
        </div>
        <div className="welcome2">
          <Card cardColor={goldCard}/>
          <Card cardColor={blackCard}/>
          <Card cardColor={blueCard}/>
          <Card cardColor={blackCard}/>
          <Card cardColor={goldCard}/>
        </div>
      </div>
    </>
  );
}

export default Welcome;
