import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Project from './Project.js';
import Articles from './Articles.js';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
    <div class="app">

      <div class="Navigation">
        <Link to="/" class="item">Projects</Link>
        <Link to="/articles" class="item">Articles</Link>
        <Link to="/about" class="item">About</Link>

      </div>

      <Route exact path="/" component={Project} />
      <Route path="/articles" component={Articles } />
      <Route path="/about" component={About} />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
