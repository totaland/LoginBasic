import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import Avatar from "../components/Avatar";

const SideNavSignOut = (props) => {
    return (
        <ul>
            <li><NavLink className={'waves-effect waves-red'} to={'/register'}>Signup</NavLink></li>
            <li><NavLink className={'waves-effect waves-red'} to={'/login'}>Login</NavLink></li>
            <hr/>
        </ul>
    )
}

export default withRouter(SideNavSignOut);

