// ResponsiveSlideBar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlinePieChart, AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { BsTags } from 'react-icons/bs';
import { LuCalendarClock } from 'react-icons/lu';
import { BiUserCircle } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import styled from 'styled-components';
import './menu.css'

const SlideBarContainer = styled.div`
position: fixed;
top: 0;
left: ${({ open }) => (open ? '0' : '-300px')};
width: ${({ open }) => (open ? '300px' : '0')};
height: 95%;
background: #4285F4;
transition: width 0.3s, left 0.3s; /* Add transition for width and left properties */
z-index: 999;
margin: 20px;
border-radius: 10px;
margin-bottom: 20px;
color: white;
 
`;

const ToggleButton = styled.button`
  position: fixed;
  top: ${({ open }) => (open ? '40px' : '10px')};
  left: ${({ open }) => (open ? '250px' : '20px')};
  background:${({ open }) => (open ? '#4285F4' : 'white')};
  color:${({ open }) => (open ? 'white' : '#4285F4')};
  border: none;
    padding: 5px 10px;
  cursor: pointer;
  transition: width 0.3s, left 0.3s;
  z-index: 1000;
  font-size:25px;
  
`;

const ResponsiveSlideBar = () => {
    const [open, setOpen] = useState(false);
    const [showToggleButton, setShowToggleButton] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth <= 768;
            setShowToggleButton(isSmallScreen);

            if (!isSmallScreen) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSlideBar = () => {
        setOpen(!open);
    };

    return (
        <>
            {showToggleButton && (
                <ToggleButton open={open} onClick={toggleSlideBar}>
                    {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </ToggleButton>
            )}
            <div className='slideBarContainer'>
                <SlideBarContainer open={open}>

                    <>
                        <div className='menu p-4'>
                            <nav className=" flex-column">
                                <Link className="Navdashboard mt-7" to='/'>Board.</Link>
                                <div className='d-flex mt-5'>
                                    <ul className='nav-links flex-column'>
                                        <li id='dashboard' className='mb-4 nav-icons' onClick={() => navigate('/dashboard')}> <AiOutlinePieChart />  <label htmlFor="dashboard">Dashboard</label></li>
                                        <li id='transaction' className='mb-4 nav-icons' onClick={() => navigate('/transaction')}> <BsTags />  <label htmlFor="transaction">Transaction</label></li>
                                        <li id='schedule' className='mb-4 nav-icons' onClick={() => navigate('/schedule')}> <LuCalendarClock />  <label htmlFor="schedule">Schedules</label></li>
                                        <li id='users' className='mb-4 nav-icons' onClick={() => navigate('/user')}> <BiUserCircle />  <label htmlFor="user">User</label></li>
                                        <li id='settings' className='mb-4 nav-icons' onClick={() => navigate('/settings')}> <CiSettings />  <label htmlFor="settings">Settings</label></li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </>

                </SlideBarContainer>
            </div>
        </>
    );
};

export default ResponsiveSlideBar;
