import React, {Component} from 'react';
import Amplify, {Auth, Storage} from 'aws-amplify';
import awsmobile from './aws-exports';
import Navbar from './navbar/NavBar'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routes from './routes/Routes'
import FooterLayout from "./footer/FooterLayout";
import { S3Album} from "aws-amplify-react";

Amplify.configure(awsmobile);



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            isAuthenticating: true,
            candidateId:'',
            imageUrl:'',
        }
        this.signOut = this.signOut.bind(this);
        this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
        this.candidateID = this.candidateID.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    uploadFile = (evt) => {
        const file = evt.target.files[0];
        const name = file.name;
        Storage.put(name, file).then((res) => {
            console.log(res);
            Storage.get(name).then((result) => {
                this.setState({
                    imageUrl: result
                })
            })

        })


    }

    async componentDidMount() {
        this.loadFacebookSDK();

        try {
            await Auth.currentAuthenticatedUser();
            this.userHasAuthenticated(true);
        } catch (e) {
            if (e !== "not authenticated") {
                alert(e);
            }
        }

        this.setState({ isAuthenticating: false });
    }

    loadFacebookSDK() {
        window.fbAsyncInit = function() {
            window.FB.init({
                appId            : '853618614979245',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v3.2'
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }


    userHasAuthenticated = (authenticated) => {
        this.setState({isAuthenticated: authenticated})
    }

    signOut = async e => {
        await Auth.signOut();
        this.userHasAuthenticated(false);

    }

    candidateID = (id) => {
        this.setState({
            candidateId: id
        })
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated,
            candidateId: this.candidateID,
            candidate: this.state.candidateId,
            uploadFile: this.uploadFile,
            imageUrl: this.state.imageUrl,
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
                    {/*<FooterLayout/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
