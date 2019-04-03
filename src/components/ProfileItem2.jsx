import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProfilePicture from '../images/WIGDAY.jpg'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import ProfileItem from './ProfileItem';

const styles = {
    card: {
        width: '100%',
        backgroundColor: '#4dd0e1',
        height: 200,
    },
    media: {
        height: 200,
    },
    bigAvatar: {
        marginTop: '-50%',
        // marginLeft: "10%",
        marginBottom: 12,
        width: 200,
        height: 200,
    },

    profile: {
        display: 'flex',
        textAlign: 'right',
        justifyContent: 'space-between',
    },
    button: {
        height: '100%',
        backgroundColor: '#ee6e73',
        borderRadius: 20,
    },
    detail: {
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#e0f7fa',
        // height: 500,
        // marginBottom: 20,
    },





};

function MediaCard(props) {
    const { classes } = props;
    return (

        <React.Fragment>
            <CssBaseline />
            <Grid>
                <Grid container className={classes.card}>

                </Grid>
                <div className={classes.detail}>
                    <Grid container className={classes.profile}>
                        <Grid>
                            <Avatar alt="Remy Sharp" src={ProfilePicture} className={classes.bigAvatar}/>
                        </Grid>

                        <Button size="small" variant={'contained'} className={classes.button}>
                            Edit Profile
                        </Button>
                    </Grid>
                    {/*<Typography style={{ textTransform: 'uppercase' }} gutterBottom>*/}
                        {/*<h5>James Nguyen</h5>*/}
                    {/*</Typography>*/}
                    {/*<Typography  gutterBottom>*/}
                        {/*<h6>james.nguyen868@gmail.com</h6>*/}
                    {/*</Typography>*/}
                </div>
                <ProfileItem/>


            </Grid>
        </React.Fragment>

    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);

