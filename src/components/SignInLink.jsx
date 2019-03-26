import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify';
const SignInLink = (props) => {
    console.log(props);
    return (
        <ul className={'right hide-on-med-and-down'}>
            <li>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><a onClick={props.props.signOut}>Log Out</a></li>
                <li>
                    <NavLink to={'/'} className={'btn btn-floating cyan lighten-1'}>
                        PF
                    </NavLink>
                </li>
            </li>
        </ul>
    )
}

export default withRouter(SignInLink);