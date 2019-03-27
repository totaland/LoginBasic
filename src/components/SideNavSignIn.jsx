import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const SideNavSignIn = (props) => {

    return (
        <ul>
            <li>
                <div className="user-view">
                    <div className="background">

                    </div>
                    <a href="#user" className={'btn btn-floating cyan lighten-1 sidenav-button'}>PP</a>
                    <a href="#name"><span className="grey-text name">Lea Medhurst</span></a>
                    <a href="#email"><span className="grey-text email">james.nguyen868@gmail.com</span></a>
                </div>
            </li>
            <li><NavLink className="waves-effect" to={'/'}>Home</NavLink></li>

            <li><a onClick={props.props.props.signOut}>Log Out</a></li>

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