import React from 'react';

// BEGIN (write your solution here)
function Card(props) {
  // если пропс не передан — берём значение по умолчанию
  const title = props.title ?? 'title';
  const text = props.text ?? 'text';

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
// END
