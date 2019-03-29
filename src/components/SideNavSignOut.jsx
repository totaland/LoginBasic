import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import Profile from "./Avatar";

const SideNavSignOut = (props) => {
    return (
        <ul>
            <li>
                <div className="user-view">
                    <div className="background backgroundColor">

                    </div>
                    <NavLink to={'/report'}><Profile/></NavLink>
                    <a href="#name"><span className="white-text name">Lea Medhurst</span></a>
                    <a href="#email"><span className="white-text email">james.nguyen868@gmail.com</span></a>
                </div>
            </li>
            <li><NavLink className={'waves-effect waves-red'} to={'/register'}>Signup</NavLink></li>
            <li><NavLink className={'waves-effect waves-red'} to={'/login'}>Login</NavLink></li>
            <hr/>
        </ul>
    )
}

export default withRouter(SideNavSignOut);

