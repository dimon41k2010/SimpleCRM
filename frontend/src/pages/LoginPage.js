import React from 'react'
import { useContext } from 'react/cjs/react.development'
import AuthContext from '../context/AuthContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components/macro'

const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)

    return (
        <Container>
            <Form onSubmit={loginUser}>
                <FormTitle>Login</FormTitle>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    margin-left: 35%;
    margin-right: 35%;
    margin-top: 10%;
    border: 1px solid #ced4da;
    padding: 20px;
    border-radius: 5%;
`;

const FormTitle = styled.div`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 20px;
`;

export default LoginPage
