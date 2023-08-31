import React from 'react'
import classes from './Contacts.module.css'
import HireForm from './HireForm'
import Image from 'next/image'

export default function Contacts() {
  return (
    <div className={classes.contact} id="Contact">
      <div className={classes.form}>
        <h1>Hire Me.</h1>
        <p>
          I am available for freelance work or any full time job.Connect with me
          via phone:<a href="tel:0708219438">&nbsp;0112490586</a> or just email
          me through{' '}
          <a href="mailto:ndemoveronica@gmail.com">
            &nbsp;ndemoveronica@gmail.com
          </a>
          <HireForm />
        </p>
      </div>
      {/* <h1 color="#fff">Bug</h1> */}
      {/* <div>
        <Image alt="picture of veronica Ndemo" />
      </div> */}
    </div>
  )
}
