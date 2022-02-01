import React from 'react'
import './navSection.css' ;
import {VscBellDot } from 'react-icons/vsc';
import {IoMdArrowDropdown } from 'react-icons/io';
import Aiony from '../Assets/aiony.jpg';

const NavSection = () => {
    return (
        <div className='navStyle'>
            <div className='welcomeNav'>
                <div className='welcomeoverview'>
                <p>Welcome</p>
                <p>Overview</p>
                </div>
                <div><VscBellDot/></div>
                
            </div>
            <div className='welcomeProfile'>
                <img src={ Aiony} alt='name' />
                <p>Opeyemi</p>
                <IoMdArrowDropdown/>
            </div>
            
        </div>
    )
}

export default NavSection
