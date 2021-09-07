import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) =>{
  return (
    <>
      <li className='cards_item'>
        <Link
          className='cards_item_link' to ={props.path}>
          <figure className='cards_item_pic-wrap'>
            <img src='/' alt='Image' />
          </figure>
          <div className='cards_item_info'>
            <h5 className='cards_item_text' />
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;