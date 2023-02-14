import { Container, Card, Col, Row } from 'react-bootstrap';
import Toast from '../components/UI/toast/Toast';

const Home = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col sm={2}>Filter</Col>
        <Col sm={10}>
          <h2>Hello</h2>
        </Col>
      </Row>
      <Toast />
    </Container>
  );
}

export default Home;