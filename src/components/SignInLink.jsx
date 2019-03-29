import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import Profile from "./Avatar";


const SignInLink = (props) => {
    return (
        <ul className={'right hide-on-med-and-down'}>
            <li>
                <li>
                    <NavLink to={'/Profile'}>
                        <Profile/>
                    </NavLink>
                </li>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/report'}>Report</NavLink></li>
                <li><a onClick={props.props.signOut}>Log Out</a></li>

            </li>
        </ul>
    )
}

export default withRouter(SignInLink);