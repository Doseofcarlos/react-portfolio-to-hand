import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my latest deployments</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              video src='images/portfolioimg6.png'
              text='This project is a employee tracker which lets you filter the employee list from females only or msles only or by age.'
              label='Assignmet'
              path='/Projects'
            />
            <CardItem
              src='images/portfolioimg2.png'
              text='This is one of my group projects that help you workout wether you want to workout at home or in the gym. This application is the one to go to. Helping you see workouts for most of the parts of yout body pulling in data from our DB to provide to the user and even store the data.'
              label='Project'
              path='/Projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/portfolioimg4.png'
              text='This application helps you keep track of your expenses and your deposits. Choosing between adding money or subtracting the graph takes the information and creates a graph showing you your income and expenses'
              label='Assignment'
              path='/Projects'
            />
            <CardItem
              src='images/portfolioimg5.png'
              text='In the workour dashboard you can save your workouts and see how often and what type of workouts you did.s'
              label='assignment'
              path='/Projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
