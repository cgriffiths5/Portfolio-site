import React from 'react'
import profileImage from './images/profile-pic.jpg'

function About(props) {
    return (
        <div>
            <h1 class="title">About</h1>
            <div>
              <img src={profileImage} id="profile-image" alt="profile-image" width="300px" />
            </div>
            <p class="text">
                My name is Chris. I am currently learning HTML, CSS, and Javascript. This is a porfolio site that 
                will contain some of my projects. Most of the projects use the React framework. From September 2021 I will 
                be undertaking a masters degree in Computer Science with the University of York.
            </p>
            <h1 class="title">Skills</h1>
                <h2 class="listtitle">Languages</h2>
                <ul class="list">
                    <li class="listitem">HTML</li>
                    <li class="listitem">CSS</li>
                    <li class="listitem">Javascript</li>
                    <li class="listitem">Python</li>
                </ul>
                <h2 class="listtitle">Frameworks</h2>
                <ul class="list">
                    <li class="listitem">React</li>
                    <li class="listitem">Flask</li>
                </ul>
                <h2 class="listtitle">Tools</h2>
                <ul class="list">
                    <li class="listitem">Git</li>
                    <li class="listitem">GitHub</li>
                </ul>
        </div>
    )
}

export default About;