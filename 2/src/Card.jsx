import React from 'react';

// BEGIN (write your solution here)
function Card(props) {
  // если нет ни title, ни text — возвращаем null
  if (!props.title && !props.text) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-body">
        {props.title && <h4 className="card-title">{props.title}</h4>}
        {props.text && <p className="card-text">{props.text}</p>}
      </div>
    </div>
  );
}

export default Card;
// END
