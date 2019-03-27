import React, {Component} from "react";
import {Auth} from 'aws-amplify';
import FacebookButton from "./FacebookButton";

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            signedIn: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleFbLogin = () => {
        this.props.userHasAuthenticated(true);
    };


    handleSubmit(e) {
        e.preventDefault();
        const {signedIn, username, password} = this.state;

        Auth.signIn({
            username: username,
            password: password,

        })
            .then(() => {
                console.log('signed in')
                this.props.userHasAuthenticated(true);
            })
            .catch(err => {
                console.log(err)
                alert(err.message)
            });

        Auth.confirmSignIn(username)
            .then(() => console.log('confirmed sign in'))
            .catch((err) => {
                console.log(err.message)
                alert(err.message)
            });

        this.setState({
            signedIn: true
        })

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-action cyan lighten-2 white-text">
                                <h3 className={'center-align'}>Login Form</h3>
                            </div>
                            <div className="card-content">
                                <div className="input-field">
                                    <i className="material-icons prefix">people</i>
                                    <input type="text" name="username" onChange={this.handleChange}/>
                                    <label htmlFor="username">Username</label>
                                </div>
                                <br/>

                                <div className="input-field">
                                    <i className="material-icons prefix">lock</i>
                                    <input type="password" name="password" onChange={this.handleChange}/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <br/>

                                <div className="input-fields">
                                    <label htmlFor="checkbox">
                                        <input type="checkbox" name="checkbox" className="filled-in"
                                               onChange={this.handleChange}/>
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <br/>

                                <div className="input-fields">
                                    <button type={'submit'} className="btn-large cyan lighten-2"
                                            style={{width: '100%'}}>Login
                                    </button>
                                </div>
                                <br/>

                                <div className="input-fields">
                                    <FacebookButton onLogin={this.handleFbLogin} message={'Login with FaceBook'}/>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }


}

export default SignInForm;

