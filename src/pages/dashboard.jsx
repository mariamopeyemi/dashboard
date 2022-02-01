import React from 'react';
import './dasboard.css';
import MiddleSection from '../components/middleSection';
import LeftSection from '../components/leftSection';
import RightSection from '../components/rightSection';
import NavSection from '../components/navSection';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-sidebar">
                <LeftSection/>
            </div>
            <div className="main-section">
                <div  className="dashboard-navbar">
                <NavSection />
                </div>
               <div className="main-section-inner"> 
                   <MiddleSection/>
                   <RightSection/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
