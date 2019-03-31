import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import Avatar from "../components/Avatar";


const SignInLink = (props) => {
    return (
        <ul className={'right hide-on-med-and-down'}>
            <li>
                <li>
                    <NavLink to={'/profile'}>
                        <Avatar/>
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