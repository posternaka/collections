import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Account = () => {
    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-3 mb-3">
                <Link to='/edit_collection' className='text-decoration-none d-flex flex-column justify-content-center align-items-center'>
                    <p className='display-1'>+</p>
                    <p>add new collection</p>
                </Link>
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <Card className='shadow'>
                            <Card.Img variant="top" src="https://via.placeholder.com/110x100/09f.png/fff" />
                            <Card.Body>
                                <Link to='/item' className='text-decoration-none text-reset'>
                                    <div className='d-flex justify-content-between'>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text className='opacity-50'>Card title</Card.Text>
                                    </div>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Link>
                                <div className='d-flex justify-content-end flex-row gap-2'>
                                    <Button variant="outline-warning" size="sm">
                                        Edit 
                                    </Button>
                                    <Button variant="outline-danger" size="sm">
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Account