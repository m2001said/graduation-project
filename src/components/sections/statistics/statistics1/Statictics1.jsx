import React, { useEffect, useState } from 'react';
import './statictics1.css';


const Statictics1 = () => {
  const statistic = [
    {
      stateName: "Years Of Experience",
      stateValue: 12,
    },
    {
      stateName: "Success Project",
      stateValue: 85,
    },
    {
      stateName: "Active Project",
      stateValue: 15,
    },
    {
      stateName: "Happy Customers",
      stateValue: 95,
    },
  ];

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
    const elements = document.querySelectorAll('.state-num');
    if (!started) {
      elements.forEach((el, index) => startCount(el, statistic[index].stateValue));
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
        {statistic.map((data, index) => (
          <div className='statistics1-card' key={index}>
            <div className='statistics1-card-value'>0</div>
            <div className='statistics1-card-title'>{data.stateName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statictics1;
