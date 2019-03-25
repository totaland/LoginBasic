import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Amplify, {Auth} from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Navbar from './components/NavBar'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BodyLayout from "./components/BodyLayout";
import Routes from './components/Routes'

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
    try{
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      console.log(e);
    }

    this.setState({isAuthenticating: false})

  }

  userHasAuthenticated = (authenticated) => {
    this.setState({isAuthenticated:authenticated})
  }

  signOut = async e =>{
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push('/login');

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
            <Navbar childProps = {childProps} signOut={this.signOut}/>
            {/*<div className="site-content">*/}
              {/*<Switch>*/}
                {/*<Route exact path={'/'} component={BodyLayout}/>*/}
                {/*<Route path={'/login'} component={SignInForm}/>*/}
                {/*<Route path={'/register'} component={SignUpForm}/>*/}
              {/*</Switch>*/}
            {/*</div>*/}
            <Routes childProps={childProps}/>
          </div>


        </BrowserRouter>
    );
  }
}

export default App;
// export default withAuthenticator(App, true);
