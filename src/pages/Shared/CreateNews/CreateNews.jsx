import React from 'react';
import bg from '../../../assets/bg.png'
import { Button } from 'react-bootstrap';

const CreateNews = () => {
    return (
        <div>
           <div className='mt-4 p-4 d-flex align-items-center  '>
   <img className='position-absolute mt-4  d-flex align-items-center  ' src={bg} alt="" />
   <div className='position-relative text-center ' style={{color:'white'}}>
    <h3>Create an Amazing Newspaper</h3>
    <p className='p-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
    <Button variant="danger">Learn More</Button>

   </div>

   </div> 
        </div>
    );
};

export default CreateNews;