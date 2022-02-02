import React from 'react';
import {BsThreeDots } from 'react-icons/bs';
import styled from "styled-components";
// import {BiWindowAlt } from 'react-icons/bi';
import {ReactComponent as CreditIcon} from './../../Assets/credit-card.svg';


const arr = [1,2,3,4,5,6]
const Monthlyprofit = () => {
  return <div>

            <div className='middleBottomHeading'>
              <h3>Monthly Profits </h3><BsThreeDots/>
            </div>
            <MyDonutCard/>
            <div className='myDonutChart'>CHART IMAGE</div>
            <DatedSpan>
                <p>12 jul 2018</p>
                <p style={{color:'grey'}}>Amount</p>
            </DatedSpan>

            {arr.map(()=>(
                    <div>
                    <MyList>
                            <div>
                                <CardIcon/>
                            </div>
                            <div>
                                <div display="flex" flexDirection="row">
                                    <DisplayCard>
                                            <p>Card **** **** **** 5678</p>
                                            <p style={{alignItems:'flex-end', color:'aqua'}}>-1,470</p>
                                    </DisplayCard>
                                    
                                </div>
                                <div display="flex" flexDirection="row">
                                        <DisplayCard className="tiny-grey">
                                            <p>5 march, 18:33</p>
                                            <p>USD</p>
                                        </DisplayCard>
                                </div>
                            </div>
                        </MyList>
                </div>
                ))}
  </div>;
};
const MyList = styled.div`
border-bottom: 1px solid #ccc;
display:flex;
padding:10px;
/* width:300px; */
`
const MyDonutCard = styled.div`
height: 30vh;

`
const DatedSpan = styled.div`
display: flex;
justify-content: space-between;

`
const DisplayCard = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
/* width: 250px; */
font-size: 12px;
padding-left: 10px;
padding-right: 10px;
&.tiny-grey{
    color:#ccc;
    font-size:10px;
}
`
const CardIcon = styled(CreditIcon)`
background-color: #5ac5f0;
color: white;
width: 30px;
height: 30px;
padding: 3px;
border-radius: 50%;
`

export default Monthlyprofit;
