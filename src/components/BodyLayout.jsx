import React from 'react'
import GetAccessToken from './GetAccessToken'
import {Redirect, withRouter} from 'react-router-dom'

const BodyLayout = (props) => {
    return (
        <GetAccessToken/>
    )
}

export default withRouter(BodyLayout);