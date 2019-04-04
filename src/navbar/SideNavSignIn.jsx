import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

const SideNavSignIn = (props) => {

    const style ={
        marginTop: 12,
        marginBottom: 12,
    }
    console.log(props);
    return (
        <ul>
            <li>
                <div className="user-view">
                    <div className="background backgroundColor">
                    </div>
                    <NavLink to={'/profile'}>
                        <Avatar src={props.props.props.props.imageUrl} style={style}/>
                    </NavLink>
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

