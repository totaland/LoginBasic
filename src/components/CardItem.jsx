import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonBar from './ButtonBar';
import IconLabelButton from '../components/IconLabelButton'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 3,
        textAlign: 'left',
        color: theme.palette.text.secondary
    },
    avatar: {
        margin: 10,
        backgroundColor: theme.palette.grey['200'],
        color: theme.palette.text.primary,
    },
    avatarContainer: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginBottom: theme.spacing.unit * 4
        }
    },
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            // flexDirection: 'row',
            justifyContent: 'center'
        }
    },
    baseline: {
        alignSelf: 'baseline',
        marginLeft: theme.spacing.unit * 4,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: theme.spacing.unit * 2,
            marginBottom: theme.spacing.unit * 2,
            marginLeft: 0
        }
    },
    inline: {
        display: 'inline-block',
        marginLeft: theme.spacing.unit * 4,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    inlineRight: {
        width: '30%',
        textAlign: 'right',
        marginLeft: 50,
        [theme.breakpoints.down('sm')]: {
            /*
                width 100% will make the two words stay in one line "other account"
                instead of breaking in two line "other" and "account"
             */
            width: '100%',
            margin: 0,
            textAlign: 'center'
        }
    },
    backButton: {
        marginRight: theme.spacing.unit * 2
    }
})

class CardItem extends Component {

    render() {
        const { classes } = this.props;
        const { props } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <div className={classes.itemContainer}>
                        <div className={classes.avatarContainer}>
                            <Avatar className={classes.avatar}>
                                <DescriptionIcon />
                            </Avatar>
                        </div>
                        <div className={classes.baseline}>
                            <div className={classes.inline}>
                                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                                    Candidate Id
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    This will display candidate ID pull from DynamoDB
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.inlineRight}>
                            {/* this is for users to go to see the report in another page*/}
                            <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                                Go to report
                            </Typography>
                            <IconLabelButton props={props}/>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(CardItem);