import React from 'react'
import { withRouter} from 'react-router-dom'
import ProfileItem from '../components/ProfileItem'
const PersonalProfile = (props) => {
    return (
        <div>
            <ProfileItem props={props}/>
        </div>
    )
}

export default withRouter(PersonalProfile);