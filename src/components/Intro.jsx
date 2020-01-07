import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Jumbotron id="intro" fluid>
        <Container>
          <h1 className="intro-content">Daniel Segura</h1>
          <div id="intro-content-wrapper">
          <p className="intro-content">
            I'm a <span className="highlight">Software engineering student</span>, expecting my Bachelor's degree by June 2020. 
            With <span className="highlight">Web Development experience (front & back-end) using ReactJS, NodeJS, Bootstrap, ExpressJS, SQL/NoSQL</span>. I have deployed applications on <span className="highlight">AWS (e.g., Lambda, Cognito, DynamoDB, S3, Route 53). </span>
            I've been a Business / Quality Analyst at Amazon for almost two years and have learned Data Analysis and Visualization with Tableau, Excel and Python. I like to work on IoT projects with my Arduino boards and all the sensors I've got.
          </p>
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

export default Intro;