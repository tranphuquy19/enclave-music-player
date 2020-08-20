import React from "react";
import "./NotYet.css";

const NotYet = ({type, message}) => {
  return (
    <div className="working-container">
      <h2>Not {type} Yet</h2>
      <p>{message}</p>
    </div>
  );
};

export default NotYet;