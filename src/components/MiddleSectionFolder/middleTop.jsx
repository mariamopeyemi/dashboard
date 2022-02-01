import React from 'react';
import './middleTop.css';
// import {SiVisa } from 'react-icons/si';

const MiddleTop = () => {
  return (
        <div className='tripleCards'>
            <div className='visaCard myCard'>
                <div>
                    <p className='visaBoxed'>   VISA </p>
                    
                    <p> **** **** **** 4765</p>
                </div>
                
                <div className="tiny-grey">
                    <p>CARD HOLDER</p>
                    <p>VALID THRU</p>
                </div>

                <div className='visaName'>
                    <p>Stephen Austin</p>
                    <p>04/21</p>
                </div>
            </div>

            <div className='myCard'>
                Investment Bid
            </div>
            <div className='myCard'>
                Last Bid
            </div>
        </div>
  )
};

export default MiddleTop;
