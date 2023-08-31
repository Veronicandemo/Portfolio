import React from 'react'
import classes from './Service.module.css'
import Card from './Card'
import { services } from './data'

export default function Service() {
  return (
    <div className={classes.service} id="Service">
      <h2>What I do</h2>
      <p>Crafting Digital Experiences with Precision and Passion</p>
      <div className={classes.cardContainer}>
        {services.map((service) => (
          <Card
            key={service.p}
            heading={service.h1}
            Icon={service.icon}
            description={service.p}
          />
        ))}
      </div>
    </div>
  )
}
