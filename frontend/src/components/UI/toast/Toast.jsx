import React, { useState } from 'react';
import { ToastContainer, Col, Row, Toast} from 'react-bootstrap';

function DismissibleExample({ title, message}) {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
      <ToastContainer position="bottom-end" className="p-3">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="https://via.placeholder.com/20/09f.png/000"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default DismissibleExample;