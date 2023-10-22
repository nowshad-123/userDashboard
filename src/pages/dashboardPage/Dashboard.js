import React from 'react'
import ResponsiveSlideBar from '../../components/menu/Menu'
import './dashboard.css'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card'
import Activities from './../../components/barchart/Barchart';
import DoughnutChart from '../../components/piechart/Piechart'
import Addprofile from '../../components/addprofile/Addprofile'


const Dashboard = () => {

    const hash = window.location.hash;
    const token = new URLSearchParams(hash).get('access_token');

    const cardDetails = [
        {
            id: 1,
            icon: "CiMoneyCheck1",
            name: "Total Revenues",
            income: "2,129,430",
            profit: "+2.5%",
            bgColor: "#7FCD93"
        },
        {
            id: 2,
            icon: "BsTags",
            name: "Total Transactions",
            income: "1,520",
            profit: "+1.75%",
            bgColor: "#DEBF85"
        },
        {
            id: 3,
            icon: "AiOutlineLike",
            name: "Total Likes",
            income: "9,721",
            profit: "+1.4%",
            bgColor: "#ECA4A4"
        },
        {
            id: 4,
            icon: "FiUsers",
            name: "Total Users",
            income: "9,721",
            profit: "+1.4%",
            bgColor: "#A9B0E5"
        }
    ];



    return (
        <>
            <div className='slideBar '>
                <ResponsiveSlideBar />
            </div>

            <div>
                <Navbar token={token} />
            </div>
            <div className="cards-container">
                {cardDetails.map((c) => (
                    <Card
                        key={c.id}
                        icon={c.icon}
                        name={c.name}
                        income={c.income}
                        profit={c.profit}
                        bgColor={c.bgColor}
                    />
                ))}
            </div>

            <div>
                <Activities />
            </div>
            <div className='bottomCo'>
                <DoughnutChart />
                <Addprofile />
            </div>

        </>
    )
}

export default Dashboard