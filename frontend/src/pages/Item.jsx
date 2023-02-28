import { useState } from 'react';
import { Card, ListGroup, Container, Badge, Button, Toast } from 'react-bootstrap';

const Item = () => {
    const [isHeart, setIsHeart] = useState(false);

    return (
        <Container>
        <Card className='mt-3'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold'>ITEM</span>
            {
                isHeart
                    ? <span role="button" className="lead" >&#10084;</span>
                    : <span role="button" className="lead" >&#129293;</span>
            }
            <div className='d-flex gap-2'>
                <Button variant="outline-warning" size="sm"  >
                    Edit 
                </Button>
                <Button variant="outline-danger" size="sm"  >
                    Delete
                </Button>
            </div>
            </Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item className='d-flex flex-column gap-2'>
                <div className='d-flex gap-1 align-items-center'>
                        <Badge pill bg="primary">
                        #werg
                        </Badge>
                </div>
                    <div className='d-flex gap-2'>
                    <span className='opacity-75 fw-bold'>ergwerg: </span>
                    <span>wergwerg</span>
                    </div>
            </ListGroup.Item>
            <ListGroup.Item>
                        <Toast.Header closeButton={false}>
                        <img
                            src="https://via.placeholder.com/20/09f.png/000"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Nikita</strong>
                        <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>I really like your idea. Sounds cool.</Toast.Body>
            </ListGroup.Item>
            </ListGroup>
        </Card>
        </Container>
    )
}

export default Item;