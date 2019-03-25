import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
const Navbar = (props) => {
    // console.log(props);
    // console.log(signOut);
    const links = props.isAuthenticated ? <SignInLink props = {props}/> : <SignOutLink props={props}/>;
    return (
    <nav className={'nav-wrapper grey darken-3'}>
        <div className={'container active-nav'}>
            <Link to={'/'} className={'brand-logo'}>Revelian</Link>
            <Link to='/' className='sidenav-trigger' data-target={"mobile-menu"}><i
                className="material-icons">menu</i></Link>
            {/*<SideNav/>*/}
            {links}
        </div>
    </nav>
    )
}

export default withRouter(Navbar);