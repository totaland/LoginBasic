import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    primary: {
        marginRight: theme.spacing.unit * 2
    },
    secondary: {
        background: theme.palette.secondary['100'],
        color: 'white'
    },
    spaceTop: {
        marginTop: 10
    }
})

class ButtonBar extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.spaceTop}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.secondary}
                >
                    Edit
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(ButtonBar);