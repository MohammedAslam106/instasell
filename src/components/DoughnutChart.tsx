'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
datasets: [
    {
    data: [10, 15, 10, 18, 13],
    backgroundColor: [
        'rgba(149, 111, 0, 1)',
        'rgba(94, 66, 0, 1)',
        'rgba(255, 221, 182, 1)',
        'rgba(255, 200, 121, 1)',
        'rgba(229, 165, 0, 1)',
    ],
    borderWidth: 1,
    },
],
};

export default function DoughnutChart(){
    return <Doughnut data={data}/>
}