import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import './styles/App.css';

import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Now using template-string-loader</h1>
          <nav className="App-nav">
            <Link to="/">Go to Home</Link>
            <Link to="/about">Go to About</Link>
            <Link to="/random">Go to Random</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
        <footer className="App-footer">Footer</footer>
      </div>
    </Provider>
  );
}

export default App;
