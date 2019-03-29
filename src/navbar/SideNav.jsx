import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIgloo} from '@fortawesome/free-solid-svg-icons'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import M from 'materialize-css';
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import SideNavSignIn from "./SideNavSignIn";
import SideNavSignOut from "./SideNavSignOut";



library.add(faIgloo);
library.add(faShoppingBag);
library.add(faSearch);

class SideNav extends Component {
    componentDidMount() {
        const elem = document.querySelector(".sidenav");
        const options = {
            inDuration: 300
        };
        const instance = M.Sidenav.init(elem, options);
    }

    render() {
        const links = this.props.props.props.isAuthenticated ? <SideNavSignIn props = {this.props}/> : <SideNavSignOut props={this.props}/>;

        return (
            <ul className="sidenav white lighten-2" id={"slide-out"}>
                {/*<li><NavLink to='/'><FontAwesomeIcon icon={"search"}/></NavLink></li>*/}
                {links}
            </ul>
        )
    }
}

export default SideNav;