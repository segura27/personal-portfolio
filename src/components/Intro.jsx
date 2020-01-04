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
          <h1 class="intro-content">Daniel Segura</h1>
          <div id="intro-content-wrapper">
          <p class="intro-content">
          I'm a Software engineering student, expecting my Bachelor's degree by June 2020. 
          I've been a Business Analyst at Amazon for almost two years and have learned Data Analysis with Tableau, Excel and Python. I like to work on IoT projects with my Arduino boards and all the sensors I have.
   
          </p>
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

export default Intro;

//I'm a Software engineering student, expecting my Bachelor\'s degree by June 2020. I\'ve been a Business Analyst at Amazon for almost two years.