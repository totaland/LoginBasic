import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#e0f7fa',
        height: 300,
        marginBottom: 20
    },
    profileNav: {
        backgroundColor: '#ee6e73',
    }
});

class ScrollableTabsButtonPrevent extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.profileNav}>
                    <Tabs value={value} onChange={this.handleChange} variant="scrollable" scrollButtons="off">
                        {/*<Tab icon={<PhoneIcon />} />*/}
                        {/*<Tab icon={<FavoriteIcon />} />*/}
                        <Tab icon={<PersonPinIcon />} />
                        <Tab icon={<HelpIcon />} />
                        <Tab icon={<ShoppingBasket />} />
                        {/*<Tab icon={<ThumbDown />} />*/}
                        {/*<Tab icon={<ThumbUp />} />*/}
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <Typography style={{ textTransform: 'uppercase' }} gutterBottom>
                    <h5>James Nguyen</h5>
                    </Typography>
                    <Typography  gutterBottom>
                    <h6>james.nguyen868@gmail.com</h6>
                    </Typography>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <Typography style={{ textTransform: 'uppercase' }} gutterBottom>
                        <h5>Help information go here</h5>
                    </Typography>
                </TabContainer>}
                {value === 2 && <TabContainer>
                    <Typography style={{ textTransform: 'uppercase' }} gutterBottom>
                        <h5>Payment information go here</h5>
                    </Typography>
                </TabContainer>}
                {/*{value === 3 && <TabContainer>Item Four</TabContainer>}*/}
                {/*{value === 4 && <TabContainer>Item Five</TabContainer>}*/}
                {/*{value === 5 && <TabContainer>Item Six</TabContainer>}*/}
                {/*{value === 6 && <TabContainer>Item Seven</TabContainer>}*/}
            </div>
        );
    }
}

ScrollableTabsButtonPrevent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonPrevent);
