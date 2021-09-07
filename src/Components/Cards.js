import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these characters!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='images/img-9.jpg'
              text='valami'
              label='label'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cards;
