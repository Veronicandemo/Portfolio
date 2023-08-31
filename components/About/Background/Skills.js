import React, { useState } from "react";
const skills = [
  "Main skills",
  "Awards",
  "Exprience",
  "Education & Certification",
];
import { mainSkills, awards, exprience, eductionalBackground } from "./data";
import classes from "./Skills.module.css";
import Skill from "./Skill";
import SkillDescription from "./SkillDescription";

export default function Skills() {
  const [content, setContent] = useState(mainSkills);
  function skillClickHandler(par) {
    if (par === "Main skills") {
      setContent(mainSkills);
    } else if (par === "Awards") {
      setContent(awards);
    } else if (par === "Exprience") {
      setContent(exprience);
    } else {
      setContent(eductionalBackground);
    }
  }
  return (
    <div>
      <div className={classes.skillContainer}>
        {skills.map((skill) => (
          <Skill key={skill} title={skill} onCLick={skillClickHandler} />
        ))}
      </div>
      <div className={classes.SkillDescriptionContainer}>

      {content.map((description) => (
          <SkillDescription
          key={description.skill}
          skill={description.skill}
          title={description.title}
          />
          ))}
          </div>
    </div>
  );
}
