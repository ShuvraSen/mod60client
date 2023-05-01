import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const Login = () => {
  const {signInUser}=useContext(AuthContext);
  const navigate=useNavigate();
  const location= useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/category/0";



const handlerLogin=(event)=>{
  event.preventDefault();
  const email=event.target.email.value;
  const password=event.target.password.value;
  
  console.log(email,password);

  signInUser(email,password)
  .then(result=>{
    const loggesUser=result.user;
    console.log(loggesUser);
    // event.target.reset()
    navigate(from)

  })
  .catch(error=>{
    console.log(error);
  })

}



    return (
        <Container>
            <h1>login</h1>
            <Form onSubmit={handlerLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' required />
       
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>


      <Button variant="primary" type="submit">
       Login
      </Button>

      <Form.Text className="text-muted">
        Do not have an account?
         <Link to='/register'>Register</Link>
        </Form.Text>


    </Form>
        </Container>
    );
};

export default Login;