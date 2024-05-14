import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const Login: React.FC = () => {
    const [emailAddress, setEmailAddress] = useState('coco@gmail.com');
    const [password, setPassword] = useState('changeit');

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        fetch("http://localhost:3080/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: `{"email": "${emailAddress}", "password": "${password}"}`
        })
            .then(r => r.json())
            .then(r => {
                if ('success' === r.message) {
                    console.log("good")
                } else {
                    window.alert("Wrong email or password")
                }
            })
    };

    return (
        <>
            <form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => {
                        setEmailAddress(e.target.value)
                    }} type='text' placeholder='enter email address'></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => {
                        setPassword(e.target.value)
                    }} type='password' placeholder='enter password here'></Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e) => handleSubmit(e)}>Login</Button>
            </form>
        </>
    );
};

export default Login;
