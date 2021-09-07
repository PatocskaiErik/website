import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Characters!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-mandalorian-characters-lead-1572974175.png?crop=0.470xw:0.939xh;0,0&resize=640:*'
              text='Mandalorian'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://static.highsnobiety.com/thumbor/w4w665qE1T9INU6V_G8XCp5rdHU=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/12/01152437/baby-yoda-sipping-soup-best-reactions-01.jpg'
              text='Baby Yoda'
              label='Baby'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.looper.com/img/gallery/mandalorian-season-2-characters-who-mean-more-than-you-know/l-intro-1608312558.jpg'
              text='Jedi Character'
              label='Fight'
              path='/services'
            />
            <CardItem
              src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mandalorian-season-3-1608310180.jpg'
              text='Family'
              label='Mistery'
              path='/products'
            />
            <CardItem
              src='https://static2.srcdn.com/wordpress/wp-content/uploads/2021/04/The-Mandalorian-season-3-dark-saber-baby-yoda-bo-Katan.jpg'
              text='Jedi characters'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
