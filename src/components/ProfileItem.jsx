import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProfilePicture from '../images/WIGDAY.jpg'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { S3Album} from "aws-amplify-react";

const styles = them => ({
    card: {
        width: '100%',
        backgroundColor: '#ee6e73',
        height: 200,
        marginTop: 20,
    },
    media: {
        height: 200,
    },
    bigAvatar: {
        marginTop: '-80%',
        marginBottom: 12,
        width: 200,
        height: 200,
    },


    button: {
        backgroundColor: '#ee6e73',
        borderRadius: 20,
        color: 'white',

    },

    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'white',
        height: "100vh",
        marginBottom: 20,
        color: 'grey',
    },
    profileNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#4dd0e1',
        color: 'white'
    },
    box: {
        boxShadow: 3,
    }


});
function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};



class MediaCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    state = {
        value: 0,
    };



    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        const {fullScreen} = this.props;
        console.log(this.props);
        return (

            <React.Fragment>
                <CssBaseline />
                <Grid>
                    <Grid container className={classes.card}>

                    </Grid>
                    <div className={classes.root}>
                        <AppBar position="static" className={classes.profileNav}>
                            <Grid>
                                <Avatar alt="Profile Picture" src={this.props.props.imageUrl} className={classes.bigAvatar}/>
                            </Grid>
                            <Grid>
                                <Tabs value={value} onChange={this.handleChange}>
                                    <Tab icon={<PersonPinIcon/>}/>
                                    <Tab icon={<HelpIcon/>}/>
                                    <Tab icon={<ShoppingBasket/>}/>
                                </Tabs>
                            </Grid>
                            <Grid>
                                <Button size="small" variant={'contained'} className={classes.button} onClick={this.handleClickOpen}>
                                    Edit Profile
                                </Button>
                                <Dialog
                                    fullScreen={fullScreen}
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                >
                                    <DialogTitle id="responsive-dialog-title">{"Upload a picture"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            <input type="file" onChange={this.props.props.uploadFile}/>
                                            {/*<S3Album level="private" path='' />*/}
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleClose} color="primary">
                                            Save
                                        </Button>
                                        <Button onClick={this.handleClose} color="primary" autoFocus>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </AppBar>
                        {value === 0 && <TabContainer>
                            <Typography style={{textTransform: 'uppercase'}} gutterBottom>
                                <h5>James Nguyen</h5>
                                <S3Album level={'private'} path={''}/>
                            </Typography>
                            <Typography gutterBottom>
                                <h6>james.nguyen868@gmail.com</h6>
                            </Typography>
                        </TabContainer>}
                        {value === 1 && <TabContainer>
                            <Typography style={{textTransform: 'uppercase'}} gutterBottom>
                                <h5>Help information go here</h5>
                            </Typography>
                        </TabContainer>}
                        {value === 2 && <TabContainer>
                            <Typography style={{textTransform: 'uppercase'}} gutterBottom>
                                <h5>Payment information go here</h5>
                            </Typography>
                        </TabContainer>}
                    </div>

                </Grid>
            </React.Fragment>

        );
    }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);

