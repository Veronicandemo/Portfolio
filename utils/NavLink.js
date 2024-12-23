import React from 'react';
import { useState } from 'react';
import classes from './NavLink.module.css';
export default function NavLink({ children, href }) {
  const [bar, setBar] = useState(false);
  function linkClickHandler(e) {
    e.preventDefault();
    setBar(true);
    document.getElementById(children).scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <a
      href={href}
      className={classes.link}
      style={{ color: bar ? '#F3375C' : '#E4DAFC', transition: 'all .3s' }}
      onClick={linkClickHandler}
    >
      {children}
      <div
        style={{ width: bar ? '100%' : '0%', transition: 'all .3s' }}
        className={classes.bar}
      ></div>
    </a>
  );
}
