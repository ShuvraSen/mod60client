import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaShareAlt,FaRegStar,FaStar, FaRegBookmark,FaEye } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({news}) => {
  const {_id,category_id,rating,author,image_url,details,total_view,title}  =news
    return (
        <Card className=" mb-4">
      <Card.Header className='d-flex align-items-center'>
        
        <Image src={author?.img} style={{height:"55px"}} roundedCircle />
       <div className='ms-3 flex-grow-1 '>
       <p className='mb-0 '>{author.name}</p>
        <p className='mt-0'>{moment(author?.published_date).format("dddd, MMMM D YYYY")}</p>
       </div>
<div>
    <FaShareAlt className='me-2'></FaShareAlt>
    <FaRegBookmark></FaRegBookmark>
</div>

        
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {details.length<250? <>{details}</>:<>{details.slice(0,250)}...
         <Link to={`/news/${_id}`}><Button variant="primary">See More</Button></Link></>}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className='d-flex '>
           
         <div className="flex-grow-1">
         <Rating
  placeholderRating={rating.number}
  readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-danger'></FaStar>}
 
  fullSymbol={<FaStar ></FaStar>}
/>

            <span>
         {rating.number}
            </span>
         </div>
          {total_view}
          <FaEye></FaEye>

        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsCard;