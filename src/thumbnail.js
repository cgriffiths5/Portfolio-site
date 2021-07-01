import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Thumbnail(props) {
    return (
        <div class="container">
            <Link to={props.link}>
                <div class="project-image">
                    <img src="" alt="project-image"/>
                </div>
                <div class="project-title">{props.title}</div>
                <div class="project-category">{props.category}</div>
            </Link>
        </div>
    )
}

export default Thumbnail;