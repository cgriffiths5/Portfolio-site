import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Project from './Project.js';
import Contact from './Contact.js';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
    <div class="app">

      <div class="header">
      <h1 class="title">Chris Griffiths</h1>
      <div class="navigation">
        <Link to="/Portfolio-site" class="item">Projects</Link>
        <Link to="/about" class="item">About</Link>
        <Link to="/contact" class="item">Contact</Link>
      </div>
      </div>


      <Route exact path="/Portfolio-site" component={Project} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
