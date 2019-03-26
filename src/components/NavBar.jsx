import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import SideNav from './SideNav'
const Navbar = (props) => {
    console.log(props);

    const links = props.props.isAuthenticated ? <SignInLink props = {props}/> : <SignOutLink props={props}/>;
    return (
    <nav className={'nav-wrapper'}>
        <div className={'container active-nav'}>
            <Link to={'/'} className={'brand-logo'}>Revelian</Link>
            <Link to='/' className='sidenav-trigger' data-target={"slide-out"}><i
                className="material-icons">menu</i></Link>
            <SideNav props = {props}/>
            {links}
        </div>
    </nav>
    )
}

export default withRouter(Navbar);