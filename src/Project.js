import React from 'react';
import Thumbnail from './thumbnail.js';
import ToDoImage from './images/to-do-list.png';
import WeatherAppImage from './images/weather-app.png'
import './App.css';

function Project(props) {
    return (
        <div>
            <h1 class="title">Introduction</h1>
            <p class="text">After graduating university in 2018 I decided to move to Japan and teach English for 3 years. In that time I decided to
              develop new skills and learn programming. My primary focus is HTML, CSS and Javascript using the React framework. On this
              website I hope to document my learning progress and display my projects.
            </p>
            <h1 class="title">Projects</h1>
            <div class="flexbox">

            <div class="flexchild">
            <Thumbnail
              id="thumbnail"
              link="https://cgriffiths5.github.io/to-do-list/"
              image={ToDoImage}
              title="To Do List"
              category="Desktop App"
            /></div>

            <div class="flexchild">
            <Thumbnail
              id="thumbnail"
              link="https://cgriffiths5.github.io/weather_app/"
              image={WeatherAppImage}
              title="Weather App"
              category="Desktop App"
            /></div>
            
            <div class="flexchild">
              <Thumbnail 
              />
            </div>
          </div>
        </div>
    )
}

export default Project;