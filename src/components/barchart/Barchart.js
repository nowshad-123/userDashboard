import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './barchart.css';

const Activities = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);


    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        const dataSet1 = [500, 350, 200, 150];
        const dataSet2 = [400, 450, 250, 100];

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'User',
                        backgroundColor: 'rgba(152, 216, 158, 1)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        data: dataSet1,
                    },
                    {
                        label: 'Guest',
                        backgroundColor: 'rgba(238, 132, 132, 1)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        data: dataSet2,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                categoryPercentage: 0.4,
                barPercentage: 0.8,
                borderRadius: 3,
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 500,
                        stepSize: 100,
                    },
                },
                plugins: {
                    legend: {
                        labels: {
                            pointStyle: 'Circle', // Set the point style to 'circle'
                            boxWidth: 10, // Customize the box width if needed
                            boxHeight: 10, // Customize the box height if needed
                            color: 'black', // Customize the label color
                            font: {
                                family: 'Arial', // Customize the font family
                                size: 12, // Customize the font size
                            },
                            padding: 20, // Customize the padding
                            useBorderRadius: true,
                            borderRadius: 5,



                        },

                        align: 'end'

                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.dataset.label}: ${context.parsed.y}`;
                            },
                        },
                    },
                },
            },
        });

    }, []);

    const canvasStyle = {
        width: '100%',
    };

    return (
        <div className="activities">
            <p className='heading'>Activities</p>
            <p className='light'>May - Jun 2021 </p>
            <div className="chart-container">
                <canvas ref={chartRef} className="chart-canvas" style={canvasStyle} />
            </div>
        </div>
    );
};

export default Activities;
