import React, { Component } from "react";
import { Card, Col, Row, Container, ProgressBar } from "react-bootstrap";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12}>
            <h1 id="education">Education</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <Card className="Card">
              <Card.Header>College Studies & Known Languages</Card.Header>

              <Card.Body>
                <Card.Title>Higher Education</Card.Title>

                <Row className="justify-content-md-center">
                  <Col className="degree-desc" xs={8}>
                    B.Sc. Software Engineering, Universidad Latina de Costa Rica.
                  </Col>
                  <Col xs={4}>
                    Progress:
                    <ProgressBar animated now="80" label="80% Done. Grad. June 2020" />
                  </Col>
                </Row>

                <Card.Title>Languages</Card.Title>
                <Card.Text>
                  English, Written and Spoken (Profient).
                  <br />
                  Spanish (Native).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Education;
