import React from 'react'
import './leftSection.css' ;
import { MdDashboard } from 'react-icons/md';
import { FaChartPie } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai';
import { SiGooglechat } from 'react-icons/si';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { MdPermContactCalendar } from 'react-icons/md';
import { RiFoldersLine } from 'react-icons/ri';
import { CgCopyright } from 'react-icons/cg';
import { BsToggleOn } from 'react-icons/bs';
import { BiDownload } from 'react-icons/bi';



const LeftSection = () => {
    return (
        <div>
            <div className="currentCard">
                <h3>Current Balance <br/> $16, 756.00</h3>
            </div>
            <div>
                <div className='dashboard-main'>
                    <MdDashboard/>
                    <p className='dashboard-box'>Dashboard</p>
                </div>
                <div className='dashboard-main'>
                    <FaChartPie/>
                    <p className='dashboard-box'>Chart</p>
                </div>
                <div className='dashboard-main'>
                    <AiFillCreditCard/>
                    <p className='dashboard-box'>Networth</p>
                </div>
                <div className='dashboard-main'>
                    <FaBitcoin/>
                    <p className='dashboard-box'>Build Wealth</p>
                </div>
                <div className='dashboard-main'>
                    <BsFillCalendarDateFill/>
                    <p className='dashboard-box'>Calender</p>
                </div>
                <div className='dashboard-main'>
                    <AiFillCreditCard/>
                    <p className='dashboard-box'>Networth</p>
                </div>
                <div className='dashboard-main'>
                    <SiGooglechat/>
                    <p className='dashboard-box'>Chats and Messages</p>
                </div>
                <div className='dashboard-main'>
                    <MdPermContactCalendar/>
                    <p className='dashboard-box'>User Profile</p>
                </div>
                <div className='dashboard-main'>
                    <RiFoldersLine/>
                    <p className='dashboard-box'>Project</p>
                </div>
               
            </div>
            <div className='lower-dashboard'>
                <div>
                    <h3>PDF Report</h3>
                    <h5>Download monthly report</h5>
                </div>
                <div>
                    <button className='myBtn'>
                        <p>Download</p>
                        <BiDownload/>
                    </button>
                </div>
                <div className='darkMode'>
                    <p>Dark Mode</p>
                    <BsToggleOn />
                </div>
                <div className='toggle'>
                   <h4><CgCopyright />2019 All Rights Reserved</h4> 
                </div>
            </div>
        </div>
    )
}

export default LeftSection
