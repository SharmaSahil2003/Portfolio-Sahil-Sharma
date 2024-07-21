import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/hotstar.jfif";
import project from "../assets/projects/fake.png";
import lift from "../assets/projects/restaurant.jpg";
import krypto from "../assets/projects/netflix.jfif";
import kickstart from "../assets/projects/contact.png";

const Projects = () => {
  return (
    <Container fluid className="project-section home-cont">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Comprehensive Restaurant Order System"
              className="project-carditem"
              description="Designed and developed a comprehensive restaurant management system to optimize order-taking processes for both in-house dining and online orders, significantly improving operational efficiency for restaurant and kitchen staff. Implemented backend APIs using SpringBoot to seamlessly interact with the UI (web app), facilitating order management and data storage in MySQL databases for future analysis. The user interface caters to diverse roles including kitchen staff, waiters, and delivery personnel, supporting detailed order management, delivery tracking, menu management, and other functionalities akin to leading industry applications."
              ghLink="https://github.com/SharmaSahil2003/Restaurant-Dine-in-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Fake News Detection"
              description="Developed a web application using React.js frontend and Flask backend with machine learning (ML) models to classify news articles as authentic or misleading, leveraging advanced Natural Language Processing (NLP) techniques. The Flask backend integrates ML models for news classification, fetching data from various sources. Backend APIs in Flask manage data retrieval, model integration, and news classification. The responsive user interface, designed with Bootstrap along with HTML and CSS, ensures an optimal user experience across desktop and mobile devices, providing intuitive navigation and interaction with categorized news content."
              ghLink="https://github.com/SharmaSahil2003/Fake-News-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Contact Manager"
              description="This project focuses on creating a comprehensive contact management application using Spring Boot and Thymeleaf, emphasizing secure Authentication and Authorization through Spring Security. The backend leverages Spring Boot for efficient development and Spring Data JPA for seamless interaction with the SQL database, ensuring robust CRUD operations. On the frontend, HTML5, CSS3, Bootstrap, and Thymeleaf combine to deliver a responsive and visually appealing user interface, enhancing user experience across devices. With a strong emphasis on security and usability, the application provides a streamlined approach to managing contacts securely and efficiently."
              ghLink="https://github.com/SharmaSahil2003/Contact-Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Disney + Hotstar Replica"
              description="Created a responsive web application resembling Disney Plus Hotstar using React.js and Bootstrap. Implemented key features like user authentication, video streaming, dynamic content loading, and efficient search functionalities. The design prioritized user-friendly interfaces and smooth navigation to enhance the overall viewing experience, ensuring compatibility across different devices for seamless entertainment access."
              ghLink="https://github.com/SharmaSahil2003/Disney-Hotstar-Replica"
              demoLink="https://disney-hotstar-replica.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="ReactFlix (Netflix Replica)"
              description="Developed a responsive web application inspired by Netflix, utilizing React.js and Bootstrap for frontend development. Implemented features such as user authentication, smooth video streaming, dynamic content loading based on user preferences, and effective search capabilities. The design focused on creating an engaging user interface with intuitive navigation and visually appealing layouts, ensuring a seamless viewing experience similar to the popular streaming platform."
              ghLink="https://github.com/SharmaSahil2003/ReactFlix"
              demoLink="https://react-flix-lime.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects