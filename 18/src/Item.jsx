import React from 'react';

// BEGIN (write your solution here)
function Item({ task, onToggle }) {
  const handleClick = (e) => {
    e.preventDefault();
    onToggle(task.id);
  };

  const content = (
    <a href="#" className="todo-task" onClick={handleClick}>
      {task.text}
    </a>
  );

  return (
    <div className="row">
      <div className="col-1">{task.id}</div>
      <div className="col">
        {task.state === 'finished' ? <s>{content}</s> : content}
      </div>
    </div>
  );
}

export default Item;
// END
