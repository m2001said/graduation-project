import React, { useEffect, useState } from 'react';
import './statistics1.css';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router';


const Statictics1 = () => {
  // const { statistics } = useSelector((state) => state.template1);
  const { pathname } = useLocation();
  const statistic = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.statistics;
    } else {
      return state.template1.statistics;
    }
  });

  const [started, setStarted] = useState(true);

  const startCount = (el, goal) => {
    let count = setInterval(() => {
      el.textContent = String(parseInt(el.textContent) + 1);
      if (el.textContent === goal) {
        clearInterval(count);
      }
    }, 2400 / goal);
  };

  const handleScroll = () => {
    const elements = document.querySelectorAll('.statistics1-card-value');
    if (!started) {
      elements.forEach((el, index) => startCount(el, statistic.statistics[index].value));
      setStarted(true);
      window.removeEventListener('scroll', handleScroll); // Remove the event listener after starting
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [started, statistic]);

  return (
    <div className='statistics1 design-1'>
      <div className='statistics1-cards'>
        {statistic.statistics.map((cards, index) => (
          <div className='statistics1-card' key={index}>
            <div className='statistics1-card-value'>0</div>
            <div className='statistics1-card-title'>{cards.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statictics1;
