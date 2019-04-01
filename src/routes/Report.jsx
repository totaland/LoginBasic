import React from 'react'
import IconLabelButton from '../components/IconLabelButton'
import {withRouter} from 'react-router-dom'
import ReportContent from '../components/ReportContent'

const Report = (props) => {
    return (
        <div>
            <ReportContent props={props}/>
            {/*<IconLabelButton props={props}/>*/}
        </div>
    )
}

export default withRouter(Report);


