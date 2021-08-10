import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux'
import allReducers from './reducers';
import { Provider } from 'react-redux';
import './index.css';

const myStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>
    ,document.getElementById('root')
)
