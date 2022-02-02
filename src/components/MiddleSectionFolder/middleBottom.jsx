import React from 'react';
import './middleBottom.css';
import Investment from './investment';
import Monthlyprofit from './monthlyprofit';

const MiddleBottom = () => {
  return (
      <div className='middleBottomCard'>
          <div className='middleBottomInvestment'>
            <Investment/>
          </div>
          <div className='middleBottomMonthly'>
            <Monthlyprofit/>
          </div>
      </div>
  )
};

export default MiddleBottom;
