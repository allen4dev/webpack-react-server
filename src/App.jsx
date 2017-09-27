import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
