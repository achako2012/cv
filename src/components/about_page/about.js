import React, {Component} from "react";

import './about.css'

export default class About extends Component {

    state = {}

    render() {
        return (
            <>
                <section>
                    <div className="row">
                        <div id="text-main">
                            <h1>about me</h1>
                            <p>Software Development Engineer in Test</p>
                            <p>I enjoy turning complex problems into simple, and intuitive parts.
                                When I'm not coding or testing, you'll find me cooking, walking or reading
                                in the park.</p>
                        </div>
                        <div id="img-main">
                            <img src={process.env.PUBLIC_URL + '/img/photo2.png'} alt='myPhotoAbout'/>
                        </div>
                    </div>
                    <div id="snaps" className="snaps">
                        <img src={process.env.PUBLIC_URL + '/img/snap1.jpeg'} alt='snap1'/>
                        <img src={process.env.PUBLIC_URL + '/img/snap2.jpeg'} alt='snap2'/>
                        <img src={process.env.PUBLIC_URL + '/img/snap3.jpeg'} alt='snap3'/>
                        <img src={process.env.PUBLIC_URL + '/img/snap4.jpeg'} alt='snap4'/>
                        <img src={process.env.PUBLIC_URL + '/img/snap5.jpeg'} alt='snap5'/>
                    </div>
                </section>
                <div id="content-detail">
                    <section id="bar-chart">
                        <div className="row">
                            <div className="columns">
                                <h2>My Skills</h2>
                                <ul className="bar-chart">
                                    <li className="axis">
                                        <div className="label">Jedi</div>
                                        <div className="label">Ninja</div>
                                        <div className="label">Geek</div>
                                        <div className="label">Budgie</div>
                                    </li>
                                    <li className="">
                                        <div className="percent">"95"<span>%</span></div>
                                        <div className="skill">Coffe drinking</div>
                                    </li>
                                    <li className="">
                                        <div className="percent">"95"<span>%</span></div>
                                        <div className="skill">Testing</div>
                                    </li>
                                    <li className="">
                                        <div className="percent">"95"<span>%</span></div>
                                        <div className="skill">Learning</div>
                                    </li>
                                    <li className="">
                                        <div className="percent">"95"<span>%</span></div>
                                        <div className="skill">Walking</div>
                                    </li>
                                    <li className="">
                                        <div className="percent">"95"<span>%</span></div>
                                        <div className="skill">Coding</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </>

        )
    }
}