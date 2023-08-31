import React from "react";
import classes from "./Service.module.css";
import Card from "./Card";
import { services } from "./data";

export default function Service() {
  return (
    <div className={classes.service} id="Service">
      <h2>My Awesome Service</h2>
      <p>
        Listed below are some of the services I offer.I always make sure to
        deliver the best of<br/> what is expected of me and also I offer a lot of
        attention to the smaller details
      </p>
      <div className={classes.cardContainer}>
      {services.map(service=>(
        <Card key={service.p} heading={service.h1} Icon={service.icon} description={service.p} />
      ))}
      </div>
    </div>
  );
}
