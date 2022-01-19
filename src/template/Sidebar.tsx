import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logo/logo.svg';
import './template.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <img src={logo} />
            </div>
            <div className="wrapper-btn">
                <NavLink to="/"><h4>Question 1</h4></NavLink>
                <NavLink to="/questiontwo"><h4>Question 2</h4></NavLink>
            </div>
        </div>
    )
}

export default Sidebar