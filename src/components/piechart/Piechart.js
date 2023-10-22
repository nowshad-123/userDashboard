import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './piechart.css';

const DoughnutChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const data = {
        labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
                borderRadius: 30,
            },
        ],
    };

    useEffect(() => {
        const ctx = chartRef.current;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: false,
                maintainAspectRatio: true,
                cutout: '80%',
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                        padding: 20,
                        title: {
                            font: {
                                size: 16, // Adjust the font size here
                            },
                        },
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: {
                                size: 12, // Customize the font size for legend labels
                            },
                        },

                    },
                },
            },
        });

        return () => {
            // Cleanup: Destroy the chart when the component unmounts
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className="doughnut-chart-container">
            <div className="heading-container">
                <h1 className="head">Top Products</h1>
                <p className="para">May-jun 2021</p>
            </div>
            <div className="canvas-container">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default DoughnutChart;
