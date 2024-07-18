import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../components/Particle';
import Intro from '../components/Home/Intro';
import Test from './Test';
import Social from '../components/Contact/Social';

const AboutUs = () => {
  return (
    <Container fluid className="home-cont aboutus-section">
        <Particle/>
        <Intro/>
        <Test/>
        <Social/>
    </Container>
  )
}

export default AboutUs;