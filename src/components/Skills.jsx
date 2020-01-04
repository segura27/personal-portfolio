import React, { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
// import Chart from './Chart'

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
    <Container fluid>
        <Row>
            <Col xs={12}>
                <h1 id="skills">My Skills</h1>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col xs={12} md={3}>
          <Card className="Card">
            <Card.Header>Front-end Web Development</Card.Header>
            <Card.Body>
              <Card.Title>Languages:</Card.Title>
              <Card.Text>HTML, CSS (<a href="https://sass-lang.com/">SCSS</a>), JavaScript (JS)</Card.Text>
              <Card.Title>Frameworks</Card.Title>
              <Card.Text>
                React, Bootstrap, <a href="https://uber.github.io/react-vis/">React-Vis</a> (Data Visualization).
              </Card.Text>
                <footer className="blockquote-footer">
                    Focusing on Responsive Web Design and Serverless Applications.
                </footer>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="Card">
            <Card.Header>Back-end Web Development</Card.Header>
            <Card.Body>
              <Card.Title>Core Tecnologies & Frameworks:</Card.Title>
              <Card.Text>NodeJS, ExpressJS, JSON, SQL, MongoDB / DynamoDB (NoSQL), JavaScript</Card.Text>
              <Card.Title>Frameworks</Card.Title>
              <Card.Text>
                React, Bootstrap, <a href="https://uber.github.io/react-vis/">React-Vis</a> (Data Visualization).
              </Card.Text>
                <footer className="blockquote-footer">
                    Focusing on REST APIs and Serverless Aplications.
                </footer>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="Card">
            <Card.Header>Development and Deployment</Card.Header>
            <Card.Body>
              <Card.Title>Development Tools:</Card.Title>
              <Card.Text>VS Code, Terminal / Console (UNIX/Windows), git.</Card.Text>
              <Card.Title>Deployment and Cloud:</Card.Title>
              <Card.Text>GitHub, AWS Lambda, AWS DynamoDB, AWS S3, AWS EC2, Heroku.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="Card">

            <Card.Header>Others</Card.Header>
            <Card.Body>
            <Card.Title>Knowledge of Internal Tools</Card.Title>
              <Card.Text>DevBox, Brazil, Bindles, VersionSets, Pipelines, git with Amazon (gitFarm).</Card.Text>
              <Card.Title>Experience with</Card.Title>
              <Card.Text>C++, Java, Python, Arduino (Robotics, IOT), SSH, VB.NET, Virtualization, Linux, Bash (scripting). </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

        
    </Container> 
      
    );
  }
}

export default Skills;
