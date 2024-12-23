import React, { useRef, useState } from 'react';
import classes from './HireForm.module.css';
import Par from './Par';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HireForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [validation, setValidation] = useState({
    name: true,
    email: true,
    subject: true,
    message: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update validation dynamically
    if (name === 'email') {
      setValidation((prev) => ({ ...prev, email: validateEmail(value) }));
    } else {
      setValidation((prev) => ({ ...prev, [name]: value.trim().length > 0 }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check for validation
    const { name, email, subject, message } = formData;
    const isValid = name && validateEmail(email) && subject && message;

    if (!isValid) {
      setValidation({
        name: !!name,
        email: validateEmail(email),
        subject: !!subject,
        message: !!message,
      });
      toast.error('Please fill out all fields correctly ❌', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'dark',
      });
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_3u9vrih',
        'template_ygybki8',
        form.current,
        'CpuitAMc1whVN5PCK'
      )
      .then(
        () => {
          toast.success('Message Sent ☑️', {
            position: 'top-right',
            autoClose: 2000,
            theme: 'dark',
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        () => {
          toast.error('Message not sent ❌', {
            position: 'top-right',
            autoClose: 2000,
            theme: 'dark',
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const { name, email, subject, message } = formData;

  return (
    <>
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail} className={classes.form}>
        <input
          value={name}
          name='name'
          onChange={handleChange}
          type='text'
          placeholder=' Your name *'
          style={{ borderColor: !validation.name ? '#E33354' : 'inherit' }}
        />
        <input
          value={email}
          name='email'
          onChange={handleChange}
          type='email'
          placeholder=' Your email *'
          style={{ borderColor: !validation.email ? '#E33354' : 'inherit' }}
        />
        <input
          value={subject}
          name='subject'
          onChange={handleChange}
          type='text'
          placeholder='Write a subject'
          style={{ borderColor: !validation.subject ? '#E33354' : 'inherit' }}
        />
        <textarea
          value={message}
          name='message'
          onChange={handleChange}
          placeholder='Your Message'
          rows={5}
          style={{ borderColor: !validation.message ? '#E33354' : 'inherit' }}
        />
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        {!isSubmitting && (
          <Par>
            {validation.name &&
            validation.email &&
            validation.subject &&
            validation.message
              ? 'Fill the form and submit your message.'
              : 'Please correct the errors above.'}
          </Par>
        )}
      </form>
    </>
  );
}
