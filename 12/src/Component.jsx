import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
function Counter() {
  const [log, setLog] = React.useState([]);

  const addPlus = () => {
    const last = get(log, 0, 0);
    setLog([last + 1, ...log]);
  };

  const addMinus = () => {
    const last = get(log, 0, 0);
    setLog([last - 1, ...log]);
  };

  const removeItem = (index) => {
    setLog(log.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={addPlus}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={addMinus}
        >
          -
        </button>
      </div>
      {log.length > 0 && (
        <div className="list-group">
          {log.map((value, index) => (
            <button
              key={uniqueId()}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => removeItem(index)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Counter;
// END
