import '../assets/css/app.scss'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch } from 'react-router-dom'
import history from './plugins/history'
import { Provider } from 'react-redux'
import store from "./helpers/store";
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