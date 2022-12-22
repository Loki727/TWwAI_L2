import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const element = 
<React.StrictMode>
    <App/>
</React.StrictMode>;
ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
