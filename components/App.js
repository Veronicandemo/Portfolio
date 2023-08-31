import React from 'react'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import About from './About/About'
import Service from './Service/Service'
import Project from './Projects/Project'
import Contacts from './Contacts/Contacts'
import Head from 'next/head'
import Footer from './Footer/Footer'
import { AppContextProvider } from './store/AppContext'
export default function App() {
  return (
    <AppContextProvider>
      <Head>
        <title>Veronica Ndemo Portfolio</title>
        {/* <script src="https://smtpjs.com/v3/smtp.js"></script> */}
      </Head>
      <Navigation />
      <Home />
      <About />
      <Service />
      <Project />
      <Contacts />
      <Footer />
    </AppContextProvider>
  )
}
