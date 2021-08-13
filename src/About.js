import React from 'react'

function About(props) {
    return (
        <div>
            <h1 class="title">About</h1>
            <p class="text">
                My name is Chris. I am currently learning HTML, CSS, and Javascript. This is a porfolio site that 
                will contain some of my projects. Most of the projects use the React framework. From September 2021 I will 
                be undertaking a masters degree in Computer Science with the University of York.
            </p>
            <h1 class="title">Skills</h1>
                <h2>Languages</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Python</li>
                </ul>
                <h2>Frameworks</h2>
                <ul>
                    <li>React</li>
                    <li>Flask</li>
                </ul>
                <h2>Tools</h2>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
        </div>
    )
}

export default About;