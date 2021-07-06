import React from 'react';
import Thumbnail from './thumbnail.js';
import ToDoImage from './images/to-do-list.png';
import WeatherAppImage from './images/weather-app.png'
import './App.css';

function Project(props) {
    return (
        <div>
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
            
          </div>
        </div>
    )
}

export default Project;