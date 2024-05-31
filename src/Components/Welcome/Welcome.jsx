import React from "react";
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
      <div className="h-[90vh] flex flex-col justify-center items-center relative">
        <div className="flex flex-col items-center relative -top-[10vh]">
          <div className="flex flex-col items-center font-semibold">
            <h4 className="text-[1.2rem]">Features</h4>
            <h1 className="text-[4rem]">All in one card.</h1>
            <p className="text-base font-normal">
              Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
              leo duis ut diam.
            </p>
          </div>
          <div className="flex items-center justify-center my-7">
            <button className="h-[4.5vh] w-[7.5vw] bg-[#5BB5A2] text-white rounded-md font-semibold flex items-center justify-center mx-2.5 hover:bg-[#459d8a]">
              Open Account
            </button>
            <button className="h-[4.5vh] w-[7.5vw] bg-transparent text-[#5BB5A2] rounded-md font-semibold flex items-center justify-center mx-2.5 hover:bg-[#5BB5A2] hover:text-white">
              Compare Cards
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-[98vw] my-[20px]">
          <Card cardColor={goldCard} />
          <Card cardColor={blackCard} />
          <Card cardColor={blueCard} />
          <Card cardColor={blackCard} />
          <Card cardColor={goldCard} />
        </div>
      </div>
    </>
  );
}

export default Welcome;
