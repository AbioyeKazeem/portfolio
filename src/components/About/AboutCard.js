import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Kazeem Abioye</span> from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            I am currently a team lead and research software engineer at Cradle Solution Devt. Ltd.
            <br />
            I have B.Sc in Computer Science from University of Ibadan
            <br />
            <br />
            Some other activities i like to participate in are!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create with purpose, build with impact!"{" "}
          </p>
          <footer className="blockquote-footer">Kazeem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
