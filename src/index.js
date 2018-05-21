import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// import './index.css';
import 'bulma/css/bulma.css'
import 'bulma-calendar/dist/bulma-calendar.min.css'

import App from './App';
import registerServiceWorker from './registerServiceWorker'
import store from './store.redux'

// ======================= Description ================================
// This is the outest component that wrap entire application consists
// of 2 main components that are
//  - <Provider />
//  - <App />
// This component use Provider to activate the Redux features and
// use App to render the rest of the application
// ====================================================================
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
