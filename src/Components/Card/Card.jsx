import React from 'react';
import './Card.css';

function Card({cardColor}) {
  return (
    <>
      <div className="card" style={cardColor}>
        <div className="cardName">
            <h1>banquee.</h1>
        </div>
        <div className="cardNumber">
            <h1>1234 1234 1234</h1>
        </div>
        <div className="cardDetails">
            <div className="cardUserName">
                <h3>Card Holder</h3>
                <h2>John Doe</h2>
            </div>
            <div className="cardUserExpiry">
                <h3>Expiry Date</h3>
                <h2>09/28</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
