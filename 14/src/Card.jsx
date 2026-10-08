import React from 'react';

// BEGIN (write your solution here)
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Body({ children }) {
  return <div className="card-body">{children}</div>;
}

function Title({ children }) {
  return <h4 className="card-title">{children}</h4>;
}

function Text({ children }) {
  return <p className="card-text">{children}</p>;
}

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;
// END
