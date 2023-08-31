import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

export default function SocialLinks() {
  return (
    <>
      <a href="https://www.instagram.com/veronicah_ndemo/" target="_blank">
        <FiInstagram size="30px" color="#fff" />
      </a>
      <a href="https://www.linkedin.com/in/veronica-ndemo/" target="_blank">
        <FaLinkedinIn size="30px" color="#fff" />
      </a>
      <a href="https://twitter.com/NdemoVeronica" target="_blank">
        <BsTwitter size="30px" color="#fff" />
      </a>
    </>
  )
}
