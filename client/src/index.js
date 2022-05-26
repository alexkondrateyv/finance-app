import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    tickers: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_TICKERS':
            return {...state, tickers: action.data}
        default:
            return state
    }
}
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
