import React, { useState } from 'react'

import './navbar.css'
import { IoIosSearch, IoMdNotificationsOutline } from 'react-icons/io';


const Navbar = (props) => {
    const { token } = props
    const [profile, setProfile] = useState('')




    //
    const accessToken = `${token}`; // Replace with your actual access token
    const apiEndpoint = 'https://www.googleapis.com/oauth2/v3/userinfo'; // Example for Google User Info API

    fetch(apiEndpoint, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse the JSON response
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        })
        .then(data => {
            // Handle the user information data
            setProfile(data.picture)

        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error: ', error);
        });





    return (
        <div className='navContainer'>
            <h4>
                Dashboard
            </h4>

            <input type="text" className='searchInput' placeholder='Search' />
            <IoIosSearch className='search-icon' />
            <IoMdNotificationsOutline className="notification-icon" />
            <img src={profile} alt="" className='picture' />
        </div>
    )
}

export default Navbar