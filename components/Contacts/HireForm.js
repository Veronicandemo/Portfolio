import React, { useRef, useState } from 'react'
import classes from './HireForm.module.css'
import Par from './Par'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function HireForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [inputData, setInputData] = useState({})
  const [messageIsSent, setMessageIsSent] = useState(false)
  const [nameIsValid, setNameIsValid] = useState(false)
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [subjectIsValid, setSubjectIsValid] = useState(false)
  const [messageIsValid, setMessageIsValid] = useState(false)

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_3u9vrih',
        'template_ygybki8',
        form.current,
        'CpuitAMc1whVN5PCK',
      )
      .then(
        (result) => {
          toast.success('Message Sent ☑️', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
        },
        (error) => {
          // show the user an error
          console.log('Email not sent')
          toast.error('Message not sent ❌', {
            position: 'top-center',

            theme: 'dark',
          })
        },
      )
    setName('')
    setEmail('')
    setMessage('')
    setSubject('')
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form ref={form} onSubmit={sendEmail} className={classes.form}>
        <input
          value={name}
          name="user_name"
          onChange={(e) => setName(e.target.value)}
          // ref={nameInputRef}
          type="text"
          placeholder="Your name*"
          style={{ borderColor: nameIsValid && '#f9004d' }}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // ref={emailInputRef}
          type="email"
          name="user_email"
          placeholder="Your email*"
          style={{ borderColor: emailIsValid && '#f9004d' }}
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          name="subject"
          // ref={subjectInputRef}
          type="text"
          placeholder="Write a subject"
          style={{ borderColor: subjectIsValid && '#f9004d' }}
        />
        <textarea
          // ref={messageInputRef}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Your Message"
          name="message"
          style={{ borderColor: messageIsValid && '#f9004d' }}
          rows={5}
        />
        <button onClick={sendEmail}>Submit</button>
        {messageIsSent && <Par>Your messegae has been sent succesfuly </Par>}
      </form>
    </>
  )
}
