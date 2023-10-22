import React from 'react'
import ResponsiveSlideBar from '../../components/menu/Menu'
import './settings.css'

export const Settings = () => {
    return (
        <>
            <div className='slideBar'>
                <ResponsiveSlideBar />
                <h1 className='page'>SettingsPage</h1>
            </div>

        </>
    )
}
