import React from 'react'
import {NavLink} from 'react-router-dom'

const MainFooter = () => {
    return (
        <div className="row">
            <div className="col l6 s12">
                <h5 className="white-text">Revelian</h5>
                <div>
                    <p>We develop technology that uncovers insights about passion, motivation, skills and behaviours to help people discover their place at work.</p>
                </div>
            </div>
            <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Explore</h5>
                <ul>
                    <li><NavLink className="grey-text text-lighten-3" to='/create'>Home</NavLink></li>
                    <li><NavLink className="grey-text text-lighten-3" to='/'>Products</NavLink></li>
                    <li><NavLink className="grey-text text-lighten-3" to='/'>About</NavLink></li>
                    <li><NavLink className="grey-text text-lighten-3" to='/'>Careers</NavLink></li>
                    <li><NavLink className="grey-text text-lighten-3" to='/'>FAQs</NavLink></li>
                    <li><NavLink className="grey-text text-lighten-3" to='/'>Support</NavLink></li>
                </ul>
            </div>
        </div>

    )
};

export default MainFooter;



