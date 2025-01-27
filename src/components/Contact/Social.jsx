import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and connect.
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/SharmaSahil2003"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="mailto:sharma2003sahil8657@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiGmail />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/sahil-sharma-58948222a/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="hhttps://leetcode.com/sharmazon2003/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social