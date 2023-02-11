import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function DismissibleExample() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="https://via.placeholder.com/20/09f.png/000"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>You have successfully logged in!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default DismissibleExample;