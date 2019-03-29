import React from 'react'
import GetAccessToken from './GetAccessToken'
import {Redirect, withRouter} from 'react-router-dom'

const GetAccess = (props) => {
    return (
        <GetAccessToken props ={props}/>
    )
}

export default withRouter(GetAccess);