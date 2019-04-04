import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
// import Avatar from "../components/Avatar";
import Avatar from '@material-ui/core/Avatar';


const SignInLink = (props) => {
    // console.log(props);
    const style ={
        marginTop: 12,
        marginBottom: 12,
    }
    return (
        <ul className={'right hide-on-med-and-down'}>
            <li>
                <li>
                    <NavLink to={'/profile'}>
                        <Avatar src={props.props.props.imageUrl} style={style}/>
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