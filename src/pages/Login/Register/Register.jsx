import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
const [error,setError]=useState('')
const [success,setSuccess]=useState('')

  const {createUser}=useContext(AuthContext)

const handleRegister=(event)=>{
  event.preventDefault();
  const email=event.target.email.value;
  const password=event.target.password.value;
  const name=event.target.name.value;
  const photo=event.target.photo.value;
  console.log(email,password,name,photo);

  setSuccess('')


  createUser(email,password)
  .then(result=>{
    const loggedUser=result.user;
    console.log(loggedUser);
  
    setSuccess('success to registered');
    event.target.reset()

  })
  .catch(error=>{
    console.log(error.message);
    setError(error.message)
  })

  

}


    return (
        <Container>
        <h1>Please Register</h1>
        <Form onSubmit={handleRegister}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nme</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name='name' required />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo Url</Form.Label>
    <Form.Control type="text" placeholder="post a url of photo" name='photo' required />
   
  </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" name='accept' label="Accept terms and conditions" />
  </Form.Group>


  <Button variant="primary" type="submit">
  Register
  </Button>
  

  <Form.Text className="text-muted">
    Already have an account
     <Link to='/login'>Login</Link>
    </Form.Text>


</Form>


   <p className='text-danger'> {error}</p>
   <p className='text-success font-weight-bold' style={{fontSize: '40px'}} > {success}</p>
    
    </Container>
    );
};

export default Register;