import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { authURL, adminURL } from "../types/url";
import { Container, Table, Button, Form } from 'react-bootstrap';
import { useSelector } from "react-redux";

const Admin = () => {
    const user = useSelector(state => state.user.user);
    const [choise, setChoise] = useState([]);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const users = await axios.get(`${adminURL}/users`, { headers: { "Authorization" : `Bearer ${ user?.token }` }});
            setUsersData(users.data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateStatus = async (status) => {
        try {
            const result = choise.map(it => ({
                id: it.id,
                username: it.username,
                status,
            }))
            await axios.patch(`${adminURL}/users`, result);
        } catch (error) {
            console.log(error);
        }
    }

    const updateRole = async (role) => {
        try {
            const result = choise.map(it => ({
                id: it.id,
                username: it.username,
                role,
            }))
            await axios.patch(`${adminURL}/users`, result);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUsers = async () => {
        try {
            const ids = choise.map(it => it.id);
            await axios.delete(`${adminURL}/users`, { data: ids });
        } catch (error) {
            
        }
    }

    const checkBox = (e, user) => {
        if(!e.target.checked) {
            const result = choise.filter(it => it.id !== user.id);
            return setChoise(result);
        }
        return setChoise([...choise, user])
    } 

    return (
        <Container>
            <div className="my-3 d-flex justify-content-center flex-row gap-2">
                <Button variant="primary" size="lg" onClick={() => updateStatus('block')}>
                    Block
                </Button>
                <Button variant="primary" size="lg" onClick={() => updateStatus('unblock')}>
                    Unblock
                </Button>
                <Button variant="primary" size="lg" onClick={() => deleteUsers()}>
                    Delete
                </Button>
                <Button variant="primary" size="lg" onClick={() => updateRole('admin')}>
                    Admin
                </Button>
                <Button variant="primary" size="lg" onClick={() => updateRole('user')}>
                    User
                </Button>
            </div>
            <Table striped bordered hover className="">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>select all</th>
                        <th>Username</th>
                        <th>Collections</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((it) => (
                            <tr key={it.id}>
                                <td>{it.id}</td>
                                <td>
                                    <Form.Check type="checkbox" onChange={(e) => checkBox(e, it)} />
                                </td>
                                <td>{it.username}</td>
                                <td>
                                    <Link to={`/edit_admin/${it.id}`}>
                                        collections
                                    </Link>
                                </td>
                                <td>{it.role}</td>
                                <td>{it.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Admin