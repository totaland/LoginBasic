import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ProfilePicture from '../images/WIGDAY.jpg'

const styles = {
    avatar: {
        marginTop: 12,
        marginBottom: 12,
    },
    bigAvatar: {
        marginTop: 12,
        marginBottom: 12,
        width: 100,
        height: 100,
    }

};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <Grid container alignItems="center">
            <Avatar alt="Remy Sharp" src={ProfilePicture} className={classes.avatar}/>
        </Grid>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
