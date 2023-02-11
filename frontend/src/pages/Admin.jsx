import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { authURL } from "../types/url";
import { Container, Table, Button, Form } from 'react-bootstrap';

const ROLE = ['user', 'admin'];

const Admin = ({ token }) => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const users = await axios.get(`${authURL}/users`, { headers: { "Authorization" : `Bearer ${ token }` }});
            setUsersData(users.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Button variant="primary" size="lg">
                Block
            </Button>
            <Button variant="primary" size="lg">
                Delete
            </Button>
            <Button variant="primary" size="lg">
                Admin
            </Button>
            <Button variant="primary" size="lg">
                User
            </Button>
            <Table striped bordered hover className="">
                <thead>
                    <tr>
                        <th>
                            select all
                        </th>
                        <th>#</th>
                        <th>Username</th>
                        <th>Collection</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((it) => (
                            <tr key={it.id}>
                                <td>
                                    <Form.Check type="checkbox" />
                                </td>
                                <td>{it.id}</td>
                                <td>{it.username}</td>
                                <td>
                                    <Link to={`users/:${it.id}`}>
                                        col.{it.id}
                                    </Link>
                                </td>
                                <td>
                                    {it.role}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Button variant="primary">Save</Button>
        </Container>
    )
}

export default Admin