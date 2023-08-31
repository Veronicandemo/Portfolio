import React from 'react'
import classes from './About.module.css'
import Skills from './Background/Skills'
import Image from 'next/image'
export default function About() {
  return (
    <div className={classes.about} id="About">
      <div className={classes.about_image_container}>
        <Image
          src="../../public/ndemovee.jpg"
          alt="Headshot of veronica ndemo"
        />
      </div>
      <div className={classes.description}>
        <h2 className={classes.descriptionHeader}>About Me</h2>
        <p>
          I am a passionate front-end .I have worked with these technologies for
          over an year now and currently looking for employement.I am also an
          engineering student and pretty good at tennis.
        </p>
        <Skills />
      </div>
    </div>
  )
}
