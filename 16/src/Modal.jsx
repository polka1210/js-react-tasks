import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
function Header({ toggle, children }) {
  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={toggle}
      ></button>
    </div>
  );
}

function Body({ children }) {
  return <div className="modal-body">{children}</div>;
}

function Footer({ children }) {
  return <div className="modal-footer">{children}</div>;
}

function Modal({ isOpen, children }) {
  return (
    <div
      className={cn('modal', { fade: isOpen, show: isOpen })}
      style={{ display: isOpen ? 'block' : 'none' }}
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
// END
