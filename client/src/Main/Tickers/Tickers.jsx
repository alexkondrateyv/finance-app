import React, {useEffect, useState} from "react";
import style from './Tickers.module.css';
import {useSelector} from "react-redux";

const Tickers = () => {
    let updatedData = useSelector(state => state.tickers);

    let [tickers, setTickers] = useState([]);
    useEffect(() => {
        setTickers(updatedData);
    }, [updatedData]);

    const tickerComponents = tickers.map(ticker =>
        <div key={ticker.ticker} className={style.item}>
            <div>
                <span>
                    ticker: {ticker.ticker}
                </span>
                <span>
                    exchange: {ticker.exchange}
                </span>
                <span>
                    price: {ticker.price}
                </span>
            </div>
            <div>
                <span>
                    change: {ticker.change}
                </span>
                <span>
                    dividend: {ticker.dividend}
                </span>
                <span>
                    yield: {ticker.yield}
                </span>
            </div>
            {/*<span>{ticker.exchange}: {ticker.ticker}</span>*/}
            {/*<span>{ticker.price}</span>*/}
            {/*<span>{ticker.dividend}</span>*/}
            {/*<span>{ticker.change_percent}%</span>*/}
        </div>)

    return (
        <div className={style.container}>
            {tickerComponents}
        </div>
    )
}

export default Tickers;