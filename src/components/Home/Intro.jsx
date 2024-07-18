import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/profile2.png";
import Tilt from "react-parallax-tilt";



const Intro = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container className="about-cont">
            <Row>
              <Col md={7} className="home-about-description">
                <h1 style={{ fontSize: "2.6rem" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <strong className="yellow">Sahil Shatrughan Sharma </strong>
                 and I'm from <strong className="yellow"> Pune, Maharashtra.</strong>
                <br />
                <br />
                I am Currently Pursuing a Bachelor's degree in Computer Science and Engineering from <b className="yellow">Pune Institute of Computer Technology.</b>
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> C++, </b>
                    as well as have knowledge in programming languages such as
                  <b className="yellow"> C, Java, Python.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">SpringBoot, MySQL</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Data Analyst.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid profile-pic" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default Intro;