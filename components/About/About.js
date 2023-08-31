import React from 'react'
import classes from './About.module.css'
import Skills from './Background/Skills'
import Image from 'next/image'
import mypic from '../../public/veeprofile.jpg'
export default function About() {
  return (
    <div className={classes.about} id="About">
      <div className={classes.about_image_container}>
        <Image
          src={mypic}
          alt="Headshot of veronica ndemo"
          width="150px"
          height="100px"
        />
      </div>
      <div className={classes.description}>
        <h2 className={classes.descriptionHeader}>About Me</h2>
        <p>
          I am a passionate and innovative software engineer with a knack for
          turning ideas into elegant, functional, and user-centric digital
          experiences. With a strong foundation in Frontend technologies, I
          specialize in implementing efficient, scalable, and maintainable
          software solutions. Whether it&apos;s building robust web applications
          and optimizing backend systems, I thrive on challenges that demand
          both creativity and technical expertise.
        </p>
        <Skills />
      </div>
    </div>
  )
}
