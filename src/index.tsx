import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {store} from "./store/store";
import AppContainer from "./containers/AppContainer";

import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
