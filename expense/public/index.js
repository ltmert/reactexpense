import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS

import App from './components/App';

// STYLES

import 'normalize.css';
import 'main.css';


ReactDOM.render(<App />, document.getElementById('app'));

ReactDom.render(<h1>Expense Tracker</h1>,document.getElementById("title"))