import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useSelector} from "react-redux";

const Chart = () => {
    let updatedData = useSelector(state => state.tickers);

    let [chart, setChart] = useState([]);

    useEffect(() => {
        let obj = {};
        updatedData.forEach((elem) => {
            obj.name = new Date(elem.last_trade_time).toISOString().slice(11, 19);
            obj[elem.ticker] = elem.price;
        })
        if (obj.name) {
            if (chart.length < 5) {
                setChart(prev => [...prev, obj]);
            } else {
                setChart(prev => [...prev.slice(1), obj]);
            }
        }
    }, [updatedData]);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="number" dataKey="AAPL" stroke="#750000" activeDot={{ r: 8 }} />
                <Line type="number" dataKey="GOOGL" stroke="#001c75" activeDot={{ r: 8 }} />
                <Line type="number" dataKey="MSFT" stroke="#007516" activeDot={{ r: 8 }} />
                <Line type="number" dataKey="AMZN" stroke="#754500" activeDot={{ r: 8 }} />
                <Line type="number" dataKey="FB" stroke="#007175" activeDot={{ r: 8 }} />
                <Line type="number" dataKey="TSLA" stroke="#5e0075" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart;