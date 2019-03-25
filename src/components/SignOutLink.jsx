import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
const SignOutLink = (props) => {
    return (
        <ul className={'right'}>
            <li>
                <li><NavLink to={'/register'}>Signup</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
            </li>
        </ul>
    )
}

export default withRouter(SignOutLink);