import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { authURL } from "../types/url";
import { Container, Table } from 'react-bootstrap';

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
            <Table striped bordered hover className="">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Collection</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((it) => (
                            <tr key={it.id}>
                                <td>{it.id}</td>
                                <td>{it.username}</td>
                                <td>
                                    <Link to={`users/:${it.id}`}>
                                        col.{it.id}
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Admin