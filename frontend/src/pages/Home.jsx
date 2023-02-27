import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Container, Col, Row } from 'react-bootstrap';

const Home = ({ user }) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.item);

  console.log(item);

  useEffect(()=> {
  }, [])


  useEffect(() => {
  }, []);

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