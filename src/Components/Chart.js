import React from 'react'
import "./dashboard.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Chart = ({title, data, dataKey, grid}) => {
 
    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data} >
                    <XAxis dataKey='name' stroke='#5550bd' />
                    <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
                    <Tooltip />
                     {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                     <Legend />
                </LineChart>
                {/* <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Product" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Sales" stroke="#82ca9d" />
                </LineChart> */}
            </ResponsiveContainer>
        </div>
    )
}
