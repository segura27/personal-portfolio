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
            <Modal.Title className="modalTitle" >Psst...! Thought you'd like to know:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-md-center modalBody modalAlert">
                <Col xs={12}  md={8} lg={6}>
                    <Alert variant="warning">This website is still in progress!</Alert>
                </Col>
            </Row>
          
          <ul className="modalBody">
              <li>
                This is an static website, served from an AWS S3 bucket configured to host the site.
              </li>
              <li>
                 Fully responsive... Try it in your phone and laptop, or resize this window to see how it fits different screens real nice!
              </li>
              <li>
                I used ReactJS with React-Bootstrap to make it look nice.
              </li>
              <li>
                  If you're curious, all the code is available on GitHub <a href="https://github.com/segura27/personal-portfolio" target="_blank" rel="noopener noreferrer">check it out!</a>
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
