import React from 'react'
import Avatar from '../components/Avatar'
import { withRouter} from 'react-router-dom'
import ProfileItem from '../components/ProfileItem'
import ProfileItem2 from '../components/ProfileItem2'
const PersonalProfile = (props) => {
    return (
        <div>
            {/*<ProfileItem props={props}/>*/}
            <ProfileItem2/>
        </div>
    )
}

export default withRouter(PersonalProfile);