import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

const SideNavSignOut = (props) => {
    return (
        <ul>
            <li>
                <div className="user-view">
                    <div className="background">
                        {/*<img src="images/office.jpg"/>*/}

                    </div>
                    <a href="#user" className={'btn btn-floating cyan lighten-1 sidenav-button'}>PP</a>
                    <a href="#name"><span className="grey-text name">Lea Medhurst</span></a>
                    <a href="#email"><span className="grey-text email">james.nguyen868@gmail.com</span></a>
                </div>
            </li>
            <li><NavLink className={'waves-effect'} to={'/register'}>Signup</NavLink></li>
            <li><NavLink className={'waves-effect'} to={'/login'}>Login</NavLink></li>
        </ul>
    )
}

export default withRouter(SideNavSignOut);

