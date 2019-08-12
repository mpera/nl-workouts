import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Plan from './components/Plan.jsx';
import Data from './components/Data.jsx';
import Log from './components/Log.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  state = {
    current: 'log',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  navBarChange = path => {
    this.setState({
      current: path,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <NavigationBar current={this.state.current} handleClick={this.handleClick} />
          <Route exact path="/" render={(props) => <Log navBarChange={this.navBarChange} />} />
          <Route path="/log" render={(props) => <Log navBarChange={this.navBarChange} />} />
          <Route path="/plan" component={Plan} navBarChange={this.navBarChange} />
          <Route path="/data" component={Data} navBarChange={this.navBarChange} />

        </div>
      </Router>
    );

  }
}

export default App;
