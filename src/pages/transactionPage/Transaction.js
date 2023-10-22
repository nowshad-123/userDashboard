import React from 'react'
import ResponsiveSlideBar from '../../components/menu/Menu'
import './transaction.css'
const Transaction = () => {
    return (
        <>
            <div className='slideBar'>
                <ResponsiveSlideBar />
                <h1 className='page'>TransactionsPage</h1>
            </div>

        </>
    )
}

export default Transaction