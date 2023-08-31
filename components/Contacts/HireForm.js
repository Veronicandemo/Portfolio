import React, { useRef, useState } from 'react'
import classes from './HireForm.module.css'
import Par from './Par'

export default function HireForm() {
  const [inputData, setInputData] = useState({})
  const [messageIsSent, setMessageIsSent] = useState(false)
  const [nameIsValid, setNameIsValid] = useState(false)
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [subjectIsValid, setSubjectIsValid] = useState(false)
  const [messageIsValid, setMessageIsValid] = useState(false)
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const subjectInputRef = useRef()
  const messageInputRef = useRef()
  function formSubmitHandler(e) {
    e.preventDefault()
    if (nameInputRef.current.value == '') {
      setNameIsValid(true)
      return
    } else if (emailInputRef.current.value == '') {
      setEmailIsValid(true)
      return
    } else if (subjectInputRef.current.value === '') {
      setSubjectIsValid(true)
      return
    } else if (messageInputRef.current.value === '') {
      setMessageIsSent(true)
      return
    }
    setInputData((prevState) => {
      return {
        ...prevState,
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        subject: subjectInputRef.current.value,
        message: messageInputRef.current.value,
      }
    })
    // console.log(inputData);
    function sendEmail() {
      Email.send({
        Host: 'smtp.gmail.com',
        Username: 'ndemoveronica@gmail.com',
        Password: 'veetnyavvkscfobo',
        To: `ndemoveronica@gmail.com`,
        From: `ndemoveronica@gmail.com`,
        Subject: `${inputData.name},${inputData.email}:${inputData.subject}`,
        Body: `${inputData.message}`,
      }).then(function (message) {
        setMessageIsSent(true)
        setInputData((prevState) => {
          return {
            ...prevState,
            name: '',
            email: '',
            subject: '',
            message: '',
          }
        })
      })
    }
    setEmailIsValid(false)
    setNameIsValid(false)
    setMessageIsValid(false)
    setSubjectIsValid(false)
    sendEmail()
  }
  return (
    <form className={classes.form}>
      <input
        value={inputData.name}
        ref={nameInputRef}
        type="text"
        placeholder="Your name*"
        style={{ borderColor: nameIsValid && '#f9004d' }}
      />
      <input
        value={inputData.email}
        ref={emailInputRef}
        type="email"
        placeholder="Your email*"
        style={{ borderColor: emailIsValid && '#f9004d' }}
      />
      <input
        value={inputData.subject}
        ref={subjectInputRef}
        type="text"
        placeholder="Write a subject"
        style={{ borderColor: subjectIsValid && '#f9004d' }}
      />
      <textarea
        ref={messageInputRef}
        value={inputData.message}
        placeholder="Your Message"
        style={{ borderColor: messageIsValid && '#f9004d' }}
        rows={5}
      />
      <button onClick={formSubmitHandler}>Submit</button>
      {messageIsSent && <Par>Your messegae has been sent succesfuly </Par>}
    </form>
  )
}
