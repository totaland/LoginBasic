import React from 'react'
import GetAccessToken from './GetAccessToken'
import {Redirect, withRouter} from 'react-router-dom'

const BodyLayout = (props) => {
    console.log(props);
    return (
        <div className="container">
            <GetAccessToken/>
        </div>
    )
}

export default withRouter(BodyLayout);