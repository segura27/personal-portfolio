import React, { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid className="contact">
        <Row className="justify-content-md-center">
          <Col xs={12}>
            <h1 id="contact">Contact</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
             You're welcome to email me at segura2794@gmail.com
        </Row>
       
      </Container>
    );
  }
}

export default Header;
