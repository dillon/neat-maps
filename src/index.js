import React from 'react';
import ReactDOM from 'react-dom';
import './main/index.css';
import Renderer from "./renderer";
import * as serviceWorker from './main/serviceWorker';

ReactDOM.render(<Renderer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
