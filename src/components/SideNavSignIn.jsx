import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify';
const SideNavSignIn = (props) => {
    console.log(props);
    return (
        <ul>
            <li>
                <div className="user-view">
                    {/*<div className="background">*/}
                        {/*/!*<img src="images/office.jpg"/>*!/*/}

                    {/*</div>*/}
                    <a href="#user" className={'circle'}>PP</a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                </div>
            </li>
            <li><NavLink className="waves-effect" to={'/'}>Home</NavLink></li>
            <li><a onClick={props.props.signOut}>Log Out</a></li>
            {/*<li>*/}
                {/*<div className="divider"></div>*/}
            {/*</li>*/}
            {/*<li><a className="subheader">Subheader</a></li>*/}
            {/*<li><a className="waves-effect" href="#!">Third Link With Waves</a></li>*/}
        </ul>
    )
}

export default withRouter(SideNavSignIn);


//
// <ul >
//     <li>
//         <li>
//             <NavLink to={'/'} className={'btn btn-floating pink lighten-1'}>
//                 PF
//             </NavLink>
//         </li>
//         <li><NavLink to={'/'}>Home</NavLink></li>
//         <li><a onClick={props.props.signOut}>Log Out</a></li>
//         <li>
//             <NavLink to={'/'} className={'btn btn-floating pink lighten-1'}>
//                 PF
//             </NavLink>
//         </li>
//     </li>
// </ul>