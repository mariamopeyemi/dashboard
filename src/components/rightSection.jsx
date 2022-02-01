import React from 'react'
import './rightSection.css'
import {BsThreeDots } from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';
import {BsStar} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';
import {GiReturnArrow} from 'react-icons/gi';
import {GiCircleClaws } from 'react-icons/gi';
import Alexander from '../Assets/alexander.jpg';
import Aiony from '../Assets/aiony.jpg';
// import {IoArrowUndo} from 'react-icons/io';

const RightSection = () => {
    return (
        <div className='rightSectionMain'>

                {/* ********PAYMENT HISTORY SECTION STARTS HERE*** */}
            <div className='paymentMainCard'>
                <div className='rightSectionHeading'>
                    <h3>Payment history </h3><BsThreeDots/>
                </div>
                <div className='paymentCard'>
                    <GiCircleClaws/>
                    <div className='paymentPadding'>
                        <div className='paymentDisplay'>
                            <p>Deposit from ATL</p>
                            <p className='negativeSpan'>-1,470</p>
                        </div>
                        <div className='paymentDisplayGrey'>
                            <p>5 march, 18:33</p>
                            <p>USD</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='paymentCard'>
                    <GiCircleClaws/>
                    <div className='paymentPadding'>
                        <div className='paymentDisplay'>
                        <p>Deposit from Paypal</p>
                        <p className='positiveSpan'>+2,470</p>
                        </div>
                        <div className='paymentDisplayGrey'>
                        <p>5 march, 18:33</p>
                        <p>USD</p>
                        </div>
                    </div>
                </div> <hr/>
                <div className='paymentCard'>
                    <GiCircleClaws/>
                    <div className='paymentPadding'>
                        <div className='paymentDisplay'>
                            <p>Deposit from ATL</p>
                            <p className='negativeSpan'>-1,470</p>
                        </div>
                        <div className='paymentDisplayGrey'>
                            <p>5 march, 18:33</p>
                            <p>USD</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='paymentCard'>
                    <GiCircleClaws/>
                    <div className='paymentPadding'>
                        <div className='paymentDisplay'>
                        <p>Cancelled</p>
                        <p>0</p>
                        </div>
                        <div className='paymentDisplayGrey'>
                        <p>5 march, 18:33</p>
                        <p>USD</p>
                        </div>
                    </div>
                </div> <hr/>
                <div className='paymentCard'>
                    <GiCircleClaws/>
                    <div className='paymentPadding'>
                        <div className='paymentDisplay'>
                        <p> Refund</p>
                        <p className='negativeSpan'>-1,470</p>
                        </div>
                        <div className='paymentDisplayGrey'>
                        <p>5 march, 18:33</p>
                        <p>USD</p>
                        </div>
                    </div>
                </div> <hr/>
                <div className='paymentCard'>
                    <GiCircleClaws/>
                    <div className='paymentPadding'>
                        <div className='paymentDisplay'>
                            <p>Deposit from ATL</p>
                            <p className='negativeSpan'>-950</p>
                        </div>
                        <div className='paymentDisplayGrey'>
                            <p>5 march, 18:33</p>
                            <p>USD</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='paymentCard'>
                    <GiCircleClaws/>
                    <div className='paymentPadding'>
                        <div className='paymentDisplay'>
                            <p>Deposit from ATL</p>
                            <p className='positiveSpan'>+250</p>
                        </div>
                        <div className='paymentDisplayGrey'>
                            <p>5 march, 18:33</p>
                            <p>USD</p>
                        </div>
                    </div>
                </div>
               </div>
                {/* **************PAYMENT HISTORY SECTION STOPS HERE**************** */}



            {/* *******RECENT REVIEWS SECTION STARTS HERE******* */}
            <div className='reviewCard'>
                <div className='rightSectionHeading'>
                    <h3>Recent Reviews </h3><BsThreeDots/>
                </div>
                <div className='starReview'>
                    <button>4.3</button>
                    <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStar/></div>
                    <p>360 reviews</p>
                </div>
                <hr/>
                <div className='reviewContact'>
                    <img src={Aiony} alt='name' />
                    <div className='reviewUser'>
                        <h4>Belle Brown</h4>
                        <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/> <BsStar/></div>
                        <h5>Now, if you are interested in being the best player, getting really good money and knowing</h5>
                        <GiReturnArrow/> Reply
                    </div>
                </div>
                <div className='reviewContact'>
                    <img src={Alexander} alt='name' />
                    <div className='reviewUser'>
                        <h4>Travis</h4>
                        <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStar/><BsStar/></div>
                        <h5>Now, if you are interested in being the best player, getting really good money and knowing</h5>
                        <GiReturnArrow/> Reply
                    </div>
                </div>
            </div>
            {/* ******RECENT REVIEWS SECTION STOPS HERE******* */}
        </div>
    )
}

export default RightSection
