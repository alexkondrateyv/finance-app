import React, {useEffect} from "react";
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import {io} from "socket.io-client";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const socket = io.connect('http://localhost:4000');

        socket.on('connect', () => {
            if (socket.connected) {
                console.log('Connected to the server!')
            }
        })

        socket.emit('start');

        socket.on('ticker', (data) => {
            dispatch({type: 'UPDATE_TICKERS', data: data})
        });

        socket.on('disconnect', () => {
            if (!socket.connected) {
                console.log('Disconnected from the server!')
            }
        })
    }, [])

    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
