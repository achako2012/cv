import React, {useState} from 'react';

import {Link} from "react-router-dom";
import {FaLinkedinIn} from "react-icons/fa";
import {IconContext} from "react-icons";
import { VscGithub } from "react-icons/vsc";

import './header.css'


const Header = () => {

    return (
        <div className="header">
            <div className="inner_header">
                <div className="navigation">
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                    <div>
                        <Link to="/cv">CV</Link>
                    </div>
                </div>
                <div className="social">
                    <IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
                        <a href="https://www.linkedin.com/in/alexander-chako-907624154/">
                            <FaLinkedinIn/>
                        </a>
                        <a href="https://github.com/achako2012?tab=repositories">
                            <VscGithub/>
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default Header;