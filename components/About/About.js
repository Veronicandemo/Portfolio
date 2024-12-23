import React from 'react';
import classes from './About.module.css';
import Skills from './Background/Skills';
import Image from 'next/image';
import myprofile from '../../public/profile.jpg';
export default function About() {
  return (
    <div className={classes.about} id='About'>
      <div className={classes.about_image_container}>
        <Image
          src={myprofile}
          alt='Headshot of veronica ndemo'
          width='150px'
          height='100px'
        />
      </div>
      <div className={classes.description}>
        <h2 className={classes.descriptionHeader}>About Me</h2>
        <p>
          My name name is Veronica Ndemo. I am a passionate and innovative
          software engineer with a knack for turning ideas into elegant,
          functional, innovative and user-centric digital experiences. My
          expertise spans building robust web applications, optimizing backend
          systems, and implementing scalable, maintainable software solutions.I
          thrive on challenges that demand a blend of creativity and technical
          acumen, and I am always eager to explore new technologies to deliver
          impactful solutions.
        </p>
        <Skills />
      </div>
    </div>
  );
}
