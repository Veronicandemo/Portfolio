import React, { useState } from "react";
import classes from "./Card.module.css";

export default function Card({ heading, Icon, description }) {
  const [changeColor, setChangeColor] = useState(false);
  function mouseEnterHandler() {
    setChangeColor(true);
  }
  function mouseLeaveHandler() {
    setChangeColor(false);
  }
  return (
    <div
      className={classes.card}
      style={{  
        background: changeColor ? "linear-gradient(to left,#fa1a5f,#64001f)" : "#333",
        transition: "all .3s",
      }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Icon
        className={classes.icon}
        style={{
          color: changeColor ? "#fff" : "#f9004d",
          transition: "all .3s",
        }}
      />
      <h2>{heading}</h2>
      <p style={{ opacity: changeColor ? "1" : "0.7" }}>{description}</p>
    </div>
  );
}
