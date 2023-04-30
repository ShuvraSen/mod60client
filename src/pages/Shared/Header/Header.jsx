import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
// import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  
    
       
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D YYYY")}</p>
      </div>

      <div className="d-flex">
      <Button variant="danger">Latest</Button>
      <Marquee className="text-danger" speed={100} pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
      
      </div>

      {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">Home</Link>
            <Link to="#pricing">About</Link>
            <Link to="#pricing">Career</Link>
            
          </Nav>
          <Nav>
             
            {user &&  <Nav.Link href="#deets">{user?.display}<FaUser></FaUser></Nav.Link>}

           { 
            user ?  <Link to='' eventKey={2} href="#memes">
            <Button variant="secondary">Log out</Button>
            </Link>:
           <Link to='/login' eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Link>
            }
            

          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </Container>
  );
};

export default Header;
