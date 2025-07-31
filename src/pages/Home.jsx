import React from 'react'
import Header from '../components/Header'
import GetInTouch from '../components/GetInTouch'
import Form from '../components/form'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Inquiries from '../components/Inquiries'
import Policy from '../components/Policy'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <GetInTouch />
        <Form />
        <Contact />
        <Map />
        <Inquiries />
        <Policy />
        <Footer />
    </div>
  )
}

export default Home
