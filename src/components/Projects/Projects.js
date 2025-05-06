import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import elemoni from "../../Assets/Projects/Elemoni.png";
import keymgt from "../../Assets/Projects/keymgt.png";
import cradleHive from "../../Assets/Projects/CradleHive.png";
import Realtypoint from "../../Assets/Projects/Realtypoint.jpg";
import techlink from "../../Assets/Projects/techlink.jpg";
import Deholly from "../../Assets/Projects/Deholly.jpg";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Check few of my latest projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keymgt}
              isBlog={false}
              title="Key Mgt System"
              description="Key Management System for tracking and safeguarding physical keys, built with modern technologies. Features include controlled key issuance, user access management, audit logging, and key rotation policies to enhance security and accountability."
              ghLink="#"
              demoLink="http://13.42.24.200/"/>
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={Realtypoint}
              isBlog={false}
              title="RealtyPoint"
              description="RealtyPoint Real Estate professionals with relevant and timely information for premium customer service delivery and Promote viable real estate investment options for the re-emerging middle class and other ambitious individuals."
              ghLink="#"
              demoLink="https://realtypointltd.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={techlink}
              isBlog={false}
              title="1techlink"
              description="1techlinkconnects users, merchants, and vendors with seamless delivery options. Through partnerships, we ensure hassle-free value transfer and offer an affiliate program for individuals to earn commissions by referring users."
              ghLink="#"
              demoLink="https://www.1techlink.com/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cradleHive}
              isBlog={false}
              title="CradleHive"
              description="CradleHive Workplace Management System for optimizing workspace resources, built with modern technologies. Features include real-time booking, user access controls, team collaboration tools, and reporting to boost efficiency and streamline operations."
              ghLink="#"
              demoLink="https://nuims.cradlehive.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elemoni}
              isBlog={false}
              title="Elemoni"
              description="Elemoni is a loan app designed to provide quick and easy access to personal loans, built with secure and user-friendly technology. Features include fast loan approval, flexible repayment options, secure transactions, and real-time updates to ensure a smooth borrowing experience."
              ghLink="#"
              demoLink="https://elemoni.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Deholly}
              isBlog={false}
              title="Dehollytech"
              description="Elemoni is a loan app designed to provide quick and easy access to personal loans, built with secure and user-friendly technology. Features include fast loan approval, flexible repayment options, secure transactions, and real-time updates to ensure a smooth borrowing experience."
              ghLink="#"
              demoLink="https://dehollytech.com/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
