import { Container, Col, Row } from 'react-bootstrap';
import Toast from '../components/UI/toast/Toast';

const Home = ({ user }) => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col sm={2}>Filter</Col>
        <Col sm={10}>
          <h2>Hello</h2>
        </Col>
      </Row>
      {
        user 
          && <Toast user={user} />
      }
    </Container>
  );
}

export default Home;