import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container fluid className="home-cont home-test">
      <Particle />
    <Container style={{padding: '60px',paddingTop:'8rem'}}>
      <ContactForm />
      <Social />
    </Container>
    </Container>
  )
}

export default Contact