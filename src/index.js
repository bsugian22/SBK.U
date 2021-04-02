import '../assets/css/app.scss'
import '../assets/css/icons.css';

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch } from 'react-router-dom'
import history from './plugins/history'
import { Provider } from 'react-redux'
import store from "./redux/store";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App'

const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <Switch>
                    <App />
                </Switch>
            </Router>
        </PersistGate>
    </Provider>, 
document.getElementById('app'))