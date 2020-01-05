import React, { Component } from "react";
import { Row, Col, Button, Modal, Alert } from "react-bootstrap";

class ModalHeadsUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
    this.close = this.close.bind(this);
  }

  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Modal size="xl" show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Psst...! Thought you'd like to know:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-md-center">
                <Col xs={12}  md={8} lg={6} >
                    <Alert variant="warning">This website is still in progress! I'll add more stuff soon...</Alert>
                </Col>
            </Row>
          
          <ul>
              <li>
                This is a fully static website, it's served from an AWS S3 bucket configured to host the site.
              </li>
              <li>
                 It is fully responsive... Go ahead! Try it in your phone, or resize this window to see how it fits different screens real nice!
              </li>
              <li>
                I used ReactJS with React-Bootstrap to make it look nice.
              </li>
              <li>
                  If you're curious about the code itself... it's all available on <a href="https://github.com/segura27/personal-portfolio" target="_blank" rel="noopener noreferrer">GitHub, check it out!</a>
              </li>
          </ul>

         
          </Modal.Body>
          <Modal.Footer>
            <Button id="ModalHeadsUpBtn" onClick={this.close}>
              OK!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalHeadsUp;
