import React, { Component } from "react";
import {Card, Container, Row, Col} from "react-bootstrap";

class SiteArchitecture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12}>
              <h1>Site Architecture</h1>
          </Col>
        </Row>  
        <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="Card">
            <Card.Header>Website</Card.Header>
            <Card.Body>
              <Card.Title>Core Technologies</Card.Title>
              <Card.Text>ReactJS, HTML, CSS (SCSS), Bootstrap (Responsive Design).</Card.Text>
              <Card.Title>Development and Version Control Tools</Card.Title>
              <Card.Text>GitHub (git), VS Code, Command Line (Terminal / PowerShell).</Card.Text>
            </Card.Body>
          </Card>
        </Col>   
        <Col xs={12} md={6} lg={4}>
          <Card className="Card">
            <Card.Header id="siteArchitecture">Infrastructure</Card.Header>
            <Card.Body>
              <Card.Title>Hosting and Deployment on AWS</Card.Title>
              <Card.Text>AWS Route 53 (Domain Name Registration and Resolution), AWS S3 (Web hosting), AWS CLI (Deploy).</Card.Text>            
            </Card.Body>
          </Card>
        </Col>     
        </Row>       
      </Container>
    );
  }
}
export default SiteArchitecture;
