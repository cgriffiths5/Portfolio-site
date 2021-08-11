import './App.css';
import {HashRouter, Route, Link} from 'react-router-dom';
import Project from './Project.js';
import Contact from './Contact.js';
import About from './About.js';

function App() {
  return (
    <HashRouter basename="/">
    <div class="app">

      <div class="header">
      <h1 class="title">Chris Griffiths</h1>
      <div class="navigation">
        <Link to="/" class="item">Projects</Link>
        <Link to="/about" class="item">About</Link>
        <Link to="/contact" class="item">Contact</Link>
      </div>
      </div>


      <Route exact path="/" component={Project} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      
    </div>
    </HashRouter>
  );
}

export default App;
