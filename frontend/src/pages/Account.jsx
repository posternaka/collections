import { Container } from 'react-bootstrap';

const Account = ({ user }) => {



    return (
        <Container>
            <h1>{user.username}</h1>
        </Container>
    )
}

export default Account