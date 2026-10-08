import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
function TodoBox() {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    const newTask = { id: uniqueId(), text };
    setTasks([newTask, ...tasks]);
    setText('');
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="me-3">
            <input
              type="text"
              value={text}
              required
              className="form-control"
              placeholder="I am going..."
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      </div>
      <div>
        {tasks.map((task) => (
          <Item key={task.id} task={task} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

export default TodoBox;
// END
