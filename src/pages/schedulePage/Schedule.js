import React from 'react'
import ResponsiveSlideBar from '../../components/menu/Menu'
import './schedule.css'

const Schedule = () => {
    return (
        <>
            <div className='slideBar'>
                <ResponsiveSlideBar />
                <h1 className='page'>SchedulePage</h1>
            </div>
        </>
    )
}

export default Schedule