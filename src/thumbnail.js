import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Thumbnail(props) {
    return (
        <div class="container">
            <a href={props.link}>
                <div class="project-image">
                    <img src={props.image} alt="project-image" width="300px"/>
                </div>
                <div class="project-title">{props.title}</div>
                <div class="project-category">{props.category}</div>
            </a>
        </div>
    )
}

export default Thumbnail;