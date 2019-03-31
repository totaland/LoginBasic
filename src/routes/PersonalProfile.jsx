import React from 'react'
import Avatar from '../components/Avatar'
import {Redirect, withRouter} from 'react-router-dom'

const PersonalProfile = (props) => {
    return (
        <Avatar props ={props}/>
    )
}

export default withRouter(PersonalProfile);