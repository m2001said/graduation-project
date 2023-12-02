import React from 'react';
import './pricing-cards.css';

const cardData = [
  {
    title: 'Design advices',
    price: '29$',
    features: [
      'General living space advices',
      'Renovation advices',
      'Interior design advices',
      'Furniture reorganization',
      'Up to 5 hours meetings',
    ],
    buttonClass: 'button1',
    cardClass: 'card1',
  },
  {
    title: 'Complete interior',
    price: '39$',
    Plans: 'Most Popular Plans',
    features: [
      'Complete home redesign',
      'Interior and exterior works',
      'Modular interior planning',
      'Kitchen design',
      'Garages organization',
    ],
    buttonClass: 'button2',
    cardClass: 'card2',
  },
  {
    title: 'Furniture design',
    price: '59$',
    features: [
      'Furniture for living room',
      'Furniture refurbishment',
      'Sofas and armchairs',
      'Tables and chairs',
      'Kitchens',
    ],
    buttonClass: 'button3',
    cardClass: 'card3',
  },
];

const Cards = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div key={index} className={`card ${card.cardClass}`}>
          <h3>{card.title}</h3>
          <h1>{card.price}</h1>
          <span>/month</span>
          <hr></hr>
          <h6>{card.Plans}</h6>
          {card.features.map((feature, i) => (
            <p key={i}>{feature}</p>
          ))}
          <button className={card.buttonClass}> Get started </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
