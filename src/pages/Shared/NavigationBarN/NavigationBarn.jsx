import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavigationBarn = () => {
    const {user, userSignOut}=useContext(AuthContext)

   
const handleLogOut=()=>{
  userSignOut()
  .then()
  .catch(error=>console.log(error))
}

    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/category/0">Home</Link>
            <Link to="#pricing">About</Link>
            <Link to="#pricing">Career</Link>
           
            
          </Nav>
          <Nav>
             
            {user && <FaUser></FaUser>}

           { 
            user ?  <Button  onClick={handleLogOut} variant="secondary">Log out</Button> :
           <Link to='/login' >
            <Button variant="secondary">Login</Button>
            </Link>
            }
          

          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBarn;