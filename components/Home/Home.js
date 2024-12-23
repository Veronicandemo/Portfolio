import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useContext } from 'react';
import AppContext from '../store/AppContext';
import NavLink from '@/utils/NavLink';
import Image from 'next/image';

import classes from './Home.module.css';
export default function Home() {
  const workArray = useMemo(
    () => ['Frontend Developer.', 'Backend Developer.'],
    []
  );
  const [h1, seth1] = useState(workArray.at(0));
  const workNameRef = useRef();
  const homePageRef = useRef();
  // Creating context
  const ctx = useContext(AppContext);

  useEffect(() => {
    const h1Interval = setInterval(() => {
      seth1(workArray.reverse().at(0));
    }, 10000);
    // Setting the Observer
    function observerFunction(observer) {
      if (observer[0].isIntersecting === false) {
        ctx.setIsHomeIntersecting();
        console.log('Set to fixed');
      } else {
        ctx.setHomeIsNotIntersecting();
      }
    }

    const observer = new IntersectionObserver(observerFunction, {
      rootMargin: '-200px',
    });
    observer.observe(homePageRef.current);
    return () => {
      clearInterval(h1Interval);
    };
  }, [workArray, ctx]);
  return (
    <div ref={homePageRef} className={classes.home} id='Home'>
      {ctx.showSideBar && (
        <div className={[ctx.showSideBar && classes.sideBar]}>
          <NavLink href='#'>Home</NavLink>
          <NavLink href='#'>About</NavLink>
          <NavLink href='#'>Service</NavLink>
          <NavLink href='#'>Projects</NavLink>
          <NavLink href='#'>Contact</NavLink>
        </div>
      )}
      <div className={classes.me}>
        <h1>Hi, my name is</h1>
        <h2>Veronica Ndemo </h2>
        <h2 ref={workNameRef} className={classes.job_name}>
          {h1}
        </h2>
        <button className={classes.button}>Get In Touch</button>
      </div>
    </div>
  );
}
