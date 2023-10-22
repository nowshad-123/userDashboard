import React from 'react'
import "./card.css"
import { CiMoneyCheck1 } from 'react-icons/ci'
import { BsTags } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

const Card = (props) => {
    const { id, icon, name, income, profit, bgColor } = props
    let IconComponent = null;

    // Map icon names to the corresponding components
    switch (icon) {
        case 'CiMoneyCheck1':
            IconComponent = <CiMoneyCheck1 />;
            break;
        case 'BsTags':
            IconComponent = <BsTags />;
            break;
        case 'AiOutlineLike':
            IconComponent = <AiOutlineLike />;
            break;
        case 'FiUsers':
            IconComponent = <FiUsers />;
            break;
        default:
            // Handle unknown icons or provide a default icon component
            break;
    }
    return (
        <div className='card m-2' key={id} >
            <div className="d-flex flex-column">
                <i className='card-icon ' style={{ background: bgColor }}>{IconComponent}</i>
                <p className='card-name'>{name}</p>
                <h1 className='card-income'>{income}</h1>
            </div>
            <div className='card-increment'>
                {profit}
            </div>
        </div>
    )
}

export default Card