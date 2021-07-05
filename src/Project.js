import React from 'react';
import Thumbnail from './thumbnail.js';
import ToDoImage from './to-do-list.png';
import './App.css';

function Project(props) {
    return (
        <div>
            <h1 class="title">Project</h1>
            <Thumbnail
              link="https://cgriffiths5.github.io/to-do-list/"
              image={ToDoImage}
              title="To Do List"
              category="Desktop App"
            />
        </div>
    )
}

export default Project;