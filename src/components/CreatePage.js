import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'

export default function LoginPage() {
  return (
    <>
    <Container>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className="ms-2" variant="primary" type="submit">
    Create Account
  </Button>
  <Button className="ms-3" href='Login' variant="primary" type="submit">
    Already Registered?
  </Button>
</Form>
    </Container>
  
    </>
  )
}
