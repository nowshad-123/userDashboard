import React from 'react'
import ResponsiveSlideBar from '../../components/menu/Menu'
import './user.css'
const User = () => {
    return (
        <>
            <div className='slideBar'>
                <ResponsiveSlideBar />
                <h1 className='page'>UserPage</h1>
            </div>

        </>
    )
}

export default User