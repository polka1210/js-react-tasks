import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
function Collapse({ text, opened = true }) {
  const [isOpen, setIsOpen] = useState(opened);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#"
          role="button"
          aria-expanded={isOpen}
          onClick={handleClick}
        >
          Link with href
        </a>
      </p>
      <div className={cn('collapse', { show: isOpen })}>
        <div className="card card-body">{text}</div>
      </div>
    </div>
  );
}

export default Collapse;
// END
