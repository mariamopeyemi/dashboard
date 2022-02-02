import React from 'react';
import styled from "styled-components";
import {BsThreeDots } from 'react-icons/bs';
// import {BiWindowAlt } from 'react-icons/bi';


const tableData = [
    {sn:1,
 name: "Honey Wells",
     amount: 499,
     date: "03-08-2018",
     color:"red"
},
 {sn:2,
 name: "Holt LTD",
     amount: 120,
     date: "06-07-2018",
     color:"red"
},
 {sn:3,
 name: "Bobby Care",
     amount: 120,
     date: "03-08-2018",
     color:"red"
},
 {sn:4,
 name: "Carls Construction",
     amount: 499,
     date: "03-08-2018",
     color:"orange"
},
 {sn:5,
 name: "Honey Wells",
     amount: 499,
     date: "03-08-2018",
     color:"green"
}, {sn:6,
 name: "Honey Wells",
     amount: 499,
     date: "03-08-2018",
     color:"red"
},
 {sn:7,
 name: "Honey Wells",
     amount: 499,
     date: "03-08-2018",
     color:"orange"
},
 {sn:8,
 name: "Honey Wells",
     amount: 499,
     date: "03-08-2018",
     color:"green"
}, {sn:9,
 name: "Honey Wells",
     amount: 499,
     date: "03-08-2018",
     color:"red"
},
]


const Investment = () => {
  return <div>
            <div className='middleBottomHeading' style={{padding:'30px'}}>
              <h3 >Investments </h3><BsThreeDots/>
            </div>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>date</th>
                </tr>
                </thead>
                <tbody>
                    {tableData.map(({sn,name,amount,date,color})=>{
                        return(
                            <Tr key={sn}>
                            <td> <input type="checkbox" id={sn} /> {" "} {sn}</td>
                            <td>{name}</td>
                            <td>{amount}</td>
                            <td>{date}</td>
                            <td><Dot bg={color}/></td>
                        </Tr>
                        )
                    })}
                </tbody>
            </Table>   
  </div>;
};


const Table=styled.table`
width: 100%;
border-collapse: collapse; 
`

const Dot= styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
background-color: ${(props)=>props.bg};
`

const Tr = styled.tr`
height: 55px;
border-bottom: 1px solid #ccc;
font-size:16px;
`
export default Investment;
