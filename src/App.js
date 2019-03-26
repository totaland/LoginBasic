import React, {Component} from 'react';
import Amplify, {Auth} from 'aws-amplify';
import awsmobile from './aws-exports';
import Navbar from './components/NavBar'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routes from './components/Routes'
import FooterLayout from "./components/FooterLayout";

Amplify.configure(awsmobile);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            isAuthenticating: true
        }
        this.signOut = this.signOut.bind(this);
        this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    }

    async componentDidMount() {
        try {
            await Auth.currentSession();
            this.userHasAuthenticated(true);
        } catch (e) {
            console.log(e);
        }

        this.setState({isAuthenticating: false})

    }

    userHasAuthenticated = (authenticated) => {
        this.setState({isAuthenticated: authenticated})
    }

    signOut = async e => {
        await Auth.signOut();
        this.userHasAuthenticated(false);

    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        }

        return (
            !this.state.isAuthenticating &&
            <BrowserRouter>
                <div className="App site">
                    <Navbar props={childProps} signOut={this.signOut}/>
                    <div className="site-content">
                        <div className={'container'}>
                            <Routes childProps={childProps}/>
                        </div>
                    </div>
                    <FooterLayout/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
