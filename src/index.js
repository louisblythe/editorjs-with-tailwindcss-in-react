import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './modules/MainRouter';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line no-undef
ReactDOM.render(<MainRouter />, document.getElementById('root'));

serviceWorker.unregister()