import React from 'react';
import Thumbnail from './thumbnail.js';
import './App.css';

function Project(props) {
    return (
        <div>
            <h1>Project</h1>
            <Thumbnail 
             link=""
             image=""
             title="Weather App"
             category="Desktop App"
            />
            <Thumbnail
              link=""
              image=""
              title="To Do List"
              category="Desktop App"
            />
        </div>
    )
}

export default Project;