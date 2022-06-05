import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { App } from './App'
import { configureStore } from '@reduxjs/toolkit';

const store = createStore (reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);
