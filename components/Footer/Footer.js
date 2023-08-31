import React from 'react'
import classes from './Footer.module.css'
import SocialLinks from '@/utils/SocialLinks'

export default function Footer() {
  const now = new Date()
  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <SocialLinks />
      </div>
      <p>
        Copyright &copy;&nbsp;{now.getFullYear()} Veronica Ndemo-All rights are
        reserved
      </p>
    </div>
  )
}
