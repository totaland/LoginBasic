import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify';
const SignInLink = (props) => {
    // console.log(props);
    return (
        <ul className={'right'}>
            <li>
                <li><NavLink to={'/'}>Home</NavLink></li>
                {/*this should be a link tag then onClick function
                 when click will log user out*/}
                <li><a onClick={props.signOut}>Log Out</a></li>
                <li>
                    <NavLink to={'/'} className={'btn btn-floating pink lighten-1'}>
                        PF
                    </NavLink>
                </li>
            </li>
        </ul>
    )
}

export default withRouter(SignInLink);