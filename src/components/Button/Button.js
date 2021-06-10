import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className="Button">
        Load more
      </button>
    </div>
  );
};

export default Button;
