import React, { useEffect } from 'react';
import classes from './Skills.module.css';
import { useState } from 'react';

export default function Skill({ title, onCLick }) {
  const [changeColor, setChangeColor] = useState(false);
  useEffect(() => {
    setChangeColor(false);
  }, []);
  function skillClickHandler(e) {
    setChangeColor(true);
    const par = e.target.closest('p').innerHTML;
    onCLick(par);
  }
  return (
    <div className={classes.skillSmallContainer} onClick={skillClickHandler}>
      <p
        className={classes.skillPar}
        style={{ color: changeColor ? '#BB2B47' : '#E4DAFC' }}
      >
        {title}
      </p>
      <div
        style={{
          width: changeColor ? '100%' : '60px',
          backgroundColor: changeColor ? '#BB2B47' : '#E4DAFC',
          transition: 'all .4s',
        }}
        className={classes.skillDiv}
      ></div>
    </div>
  );
}
