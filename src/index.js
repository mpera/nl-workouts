import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Plan from './components/Plan.jsx';
import Data from './components/Data.jsx';
import Log from './components/Log.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <NavigationBar />
            <Route exact path="/" component={Log} />
            <Route path="/log" component={Log} />
            <Route path="/plan" component={Plan} />
            <Route path="/data" component={Data} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
