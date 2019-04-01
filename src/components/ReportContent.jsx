import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardItem from './CardItem';
import SectionHeader from './SectionHeader';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['A500'],
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        marginTop: 20,
        // padding: 20,
        paddingBottom: 200
    },
    grid: {
        // width: 1000
    }
})

class Cards extends Component {


    render() {
        const { classes } = this.props;
        const { props } = this.props;
        // const props = this.props;
        console.log(props);
        console.log(classes);
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                            <Grid item xs={12}>
                                <SectionHeader title="Report" subtitle="List of candidates report" />
                                <CardItem props={props}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Cards);