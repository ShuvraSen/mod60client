import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories]=useState([]);
    console.log(categories);


    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h1>all categories news</h1>
            <div >
                {
                    categories.map(category=> <p 
                    key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                   

                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftNav;