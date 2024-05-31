import React from "react";
// import './Header.css';

function Header() {
  return (
    <>
      {/* <div className="header">
        <div className="brandName">
            <h2>banquee.</h2>
        </div>
        <div className="brandLinks">
          <div className="singleBrandLinks">
            <button className="brandBtn">Features</button>
          </div>
          <div className="singleBrandLinks">
            <button className="brandBtn">Compare</button>
          </div>
          <div className="singleBrandLinks">
            <button className="brandBtn">Support</button>
          </div>
          <div className="singleBrandLinks">
            <button className="brandBtn">Blog</button>
          </div>
        </div>
        <div className="brandButtons">
          <button className="brandBtn brandBtnLogin">Login</button>
          <button className="brandBtn brandBtnOpenAccount">Open Account</button>
        </div>
      </div> */}

<div className="flex flex-row justify-around items-center h-10 py-10">
  <div className="brandName">
    <h2 className="text-teal-500">banquee.</h2>
  </div>
  <div className="flex flex-row">
    <div className="mx-2.5">
      <button className="brandBtn h-[4.5vh] w-[5vw] bg-transparent border-none rounded  hover:bg-gray-200">Features</button>
    </div>
    <div className="mx-2.5">
      <button className="brandBtn h-[4.5vh] w-[5vw] bg-transparent border-none rounded  hover:bg-gray-200">Compare</button>
    </div>
    <div className="mx-2.5">
      <button className="brandBtn h-[4.5vh] w-[5vw] bg-transparent border-none rounded  hover:bg-gray-200">Support</button>
    </div>
    <div className="mx-2.5">
      <button className="brandBtn h-[4.5vh] w-[5vw] bg-transparent border-none rounded  hover:bg-gray-200">Blog</button>
    </div>
  </div>
  <div className="flex">
    <button className="mx-2.5 h-[4.5vh] w-[5vw] bg-transparent border-none rounded  cursor-pointer text-teal-500 hover:bg-teal-600 hover:text-white">Login</button>
    <button className="mx-2.5 h-[4.5vh] w-[7vw] bg-teal-500 text-white border-none rounded  cursor-pointer hover:bg-teal-700">Open Account</button>
  </div>
</div>

    </>
  );
}

export default Header;