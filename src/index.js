import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'bulma/css/bulma.css';
import 'bulma-calendar/dist/bulma-calendar.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
