import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";

import Icon from '@material-ui/core/Icon';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});


function IconLabelButtons(props) {
    const { classes } = props;
    // console.log(props);

    const handleClick = (e) => {

        const candidateId = props.props.candidate;
        // console.log(candidateId);
        const headers = {
            'x-client-id': '69696969-6969-6969-6969-696969696969',
            'x-api-key': 'r2zf4FdpQWaazJd1t9yj0aQ3vXXcfy7J1HYTfnIj',
            'Accept': 'application/pdf'
        }
        const adsUrl = 'http://dev-hub-2.0.s3-website-ap-southeast-2.amazonaws.com/ads/'
        const apiUrl = 'https://assessmentapi.dev.int.revelian.com/api/candidates/'+candidateId+'/pdf-report'
        //body in JSon API is the data in axios library
        axios.get(apiUrl, {
            headers: headers,
            responseType: 'arraybuffer'
        },).then(res => {
            let blob = new Blob([res.data], { type: 'application/pdf' }),
            url = window.URL.createObjectURL(blob)

            window.open(url)
            // window.location.replace(url);
        });
        e.preventDefault();
    };
    return (
        <div>

            <Button variant="contained" color="primary" className={classes.button} onClick ={handleClick}>
                GO
                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon className={classes.rightIcon}>send</Icon>
            </Button>

        </div>
    );
}

IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);
