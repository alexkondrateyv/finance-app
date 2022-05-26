import React from "react";
import style from './Main.module.css';
import Tickers from "./Tickers/Tickers";
import Chart from "./Chart/Chart";

const Main = () => {
    return(
        <div className={style.main}>
            <Chart />
            <Tickers />
        </div>
    )
}

export default Main;