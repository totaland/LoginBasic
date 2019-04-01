import React from 'react'
import Avatar from '../components/Avatar'
import {Redirect, withRouter} from 'react-router-dom'

const PersonalProfile = (props) => {
    return (
        <div>
            <h1>This will be personal profile page.</h1>
            <Avatar props ={props}/>

        </div>
    )
}

export default withRouter(PersonalProfile);