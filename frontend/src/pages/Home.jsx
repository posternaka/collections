import { Container, Card, Col, Row } from 'react-bootstrap';
import Toast from '../components/UI/toast/Toast';

const Home = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col sm={2}>Filter</Col>
        <Col sm={10}>
          <Row xs={4} md={4} className="g-4 gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx} className="shadow-lg p-3 mb-5 bg-body rounded">
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/400/09f.png/fff" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Toast />
    </Container>
  );
}

export default Home;