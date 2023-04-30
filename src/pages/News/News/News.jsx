import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from './EditorInsight/EditorInsight';

const News = () => {
    const detailsNews=useLoaderData();
  const {_id,category_id,rating,author,image_url,details,total_view,title}  =detailsNews;
    return (
        <div >
            <Card className='mb-4'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
       <Link to={`/category/${category_id}`}> <Button variant="primary">All news in this category</Button></Link>
      </Card.Body>
    </Card>

    <EditorInsight></EditorInsight>
        </div>
    );
};

export default News;