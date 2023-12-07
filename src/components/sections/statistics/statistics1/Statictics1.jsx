import React, { useEffect, useState } from 'react';
import './statictics1.css';
import {useSelector} from 'react-redux'


const Statictics1 = () => {
  const { statistic } = useSelector((state) => state.template);
 console.log(statistic);

  const [started, setStarted] = useState(false);

  const startCount = (el, goal) => {
    let count = setInterval(() => {
      el.textContent++;
      if (parseInt(el.textContent) === goal) {
        clearInterval(count);
      }
    }, 2400 / goal);
  };

  const handleScroll = () => {
    const elements = document.querySelectorAll('.statistics1-card-value');
    if (!started) {
      elements.forEach((el, index) => startCount(el, statistic[index].value));
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
        {statistic.map((cards, index) => (
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
