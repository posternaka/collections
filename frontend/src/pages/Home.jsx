import { Container, Col, Row } from 'react-bootstrap';

const Home = ({ user }) => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col sm={2}>Filter</Col>
        <Col sm={10}>
          <h2>Hello, {user?.username} </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;