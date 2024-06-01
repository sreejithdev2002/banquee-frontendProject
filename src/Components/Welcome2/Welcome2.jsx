import React from 'react';
import "./Welcome2.css";
import Phone from '../Phone/Phone';

function Welcome2() {
  return (
    <>
      <div className="welcome2">
        <div className="wel2Part1">
            <h1>One app.</h1>
            <h1>One banking.</h1>
        </div>
        <div className="wel2Part2">
            <Phone/>
        </div>
      </div>
    </>
  )
}

export default Welcome2
