import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ to, children, ...props }) {
  if (to) {
    return (
      <Link to={to} className="main-link" {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className="main-link" {...props}>
      {children}
    </button>
  );
}

export default LinkButton;
