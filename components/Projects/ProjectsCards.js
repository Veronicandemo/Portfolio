import React from "react";
import classes from "./ProjectsCard.module.css";
import { useState } from "react";

export default function ProjectsCards({
  heading,
  subTitle,
  projectUrl,
  imageUrl,
}) {
  const [isHoveredOver, setIsHovered] = useState(false);
  function mouseEnterHandler() {
    setIsHovered(true);
  }
  function mouseLeaveHandler() {
    setIsHovered(false);
  }
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${imageUrl})`,
        background: isHoveredOver
          ? `linear-gradient(to bottom,#f9004d,rgba(0,0,0,0.4)),url(${imageUrl})`
          : `url(${imageUrl})`,
        transform:isHoveredOver?'scale(1.1)':'scale(1)'
      }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className={classes.subContainer}>
        <p>{subTitle}</p>
        <h2 className={classes.heading}>{heading}</h2>
        <div>
          <a href={projectUrl} target="_blank" >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
