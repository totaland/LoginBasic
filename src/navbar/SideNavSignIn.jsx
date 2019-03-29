import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Profile from '../components/Avatar'

const SideNavSignIn = (props) => {

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
            <li><NavLink className="waves-effect waves-red" to={'/'}>Home</NavLink></li>
            <li><NavLink className="waves-effect waves-red" to={'/report'}>Report</NavLink></li>
            <li><a onClick={props.props.props.signOut} className={'waves-effect waves-red'}>Log Out</a></li>
            <hr/>


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