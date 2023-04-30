import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGoogle,FaGithub ,FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";
import QZone from '../QZone/QZone';
import CreateNews from '../CreateNews/CreateNews';
// import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <div>
            <Button  className='mb-2 p-2' variant="info"> 
                <FaGoogle></FaGoogle>
                 Login with Google</Button>
      <Button className='mb-4 p-2' variant="info"> <FaGithub></FaGithub> Login with GitHub</Button>
      </div>

      <h3 className='mt-4 mb-3'>Find Us On</h3>
      <ListGroup>
      
      <ListGroup.Item>  <FaFacebookF className='text-info me-2'></FaFacebookF> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter className='text-primary me-2'></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item> <FaInstagram className='text-danger me-2'></FaInstagram>  Instagram</ListGroup.Item>
    </ListGroup>

   <QZone></QZone>

   {/* <div className='mt-4 p-4 d-flex align-items-center  '>
   <img className='position-absolute mt-4  d-flex align-items-center  ' src={bg} alt="" />
   <div className='position-relative text-center ' style={{color:'white'}}>
    <h3>Create an Amazing Newspaper</h3>
    <p className='p-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
    <Button variant="danger">Learn More</Button>

   </div>

   </div> */}

<CreateNews></CreateNews>

        </div>
    );
};

export default RightNav;

