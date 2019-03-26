import React, {Component} from "react";
import {Auth} from 'aws-amplify';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone_number: '',
            confirmationCode: '',
            signedUp: false,
            newUser: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(e) {

        e.preventDefault();
        const {signedUp, username, password, email, phone_number, confirmationCode} = this.state;

        try{
            const newUser = Auth.signUp({
                username: username,
                password: password,
                attributes: {
                    email: email,
                    phone_number: phone_number
                }
            }).then(() => console.log('signed up')).catch(err => console.log(err));

            this.setState({
                newUser
            })
        } catch (e) {
            alert(e.message);
        }

        this.setState({ isLoading: false });

    }


    handleConfirmationSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading: true});

        try {
            Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
                .then(() => {
                        Auth.signIn(this.state.username, this.state.password)
                        this.props.userHasAuthenticated(true);
                        this.props.history.push("/");
                    }
                )

        } catch (e) {
            alert(e.message);
            this.setState({isLoading: false});
        }

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {

        if (this.state.newUser ===null) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <div className="card">
                                <div className="card-action cyan lighten-2 white-text">
                                    <h3>Register Form</h3>
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

                                    <div className="input-field">
                                        <i className="material-icons prefix">email</i>
                                        <input type="email" name="email" onChange={this.handleChange}/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <br/>

                                    <div className="input-field">
                                        <i className="material-icons prefix">phone</i>
                                        <input type="text" name="phone_number" onChange={this.handleChange}/>
                                        <label htmlFor="phone_number">Phone Number</label>
                                    </div>
                                    <br/>

                                    {/*<div className="input-field">*/}
                                    {/*<i className="material-icons prefix">add_location</i>*/}
                                    {/*<input type="text" id="address" onChange={this.handleChange}/>*/}
                                    {/*<label htmlFor="address">Company Address</label>*/}
                                    {/*</div>*/}
                                    {/*<br/>*/}

                                    <div className="input-field">
                                        <button type={'submit'} className="btn-large cyan lighten-2" style={{width: '100%'}}>Register
                                        </button>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            );

        } else {
            return (
                <form onSubmit={this.handleConfirmationSubmit}>
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <div className="card">
                                <div className="card-action cyan lighten-2 white-text">
                                    <h3>Confirmation Code</h3>
                                </div>
                                <div className="card-content">
                                    <label>Username</label>
                                    <input type="text" name='username' onChange={this.handleChange}/>
                                    <label>Confirmation Code</label>
                                    <input type="text" name='confirmationCode' onChange={this.handleChange}/>
                                    <button type={'submit'}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
    }

}

export default SignUpForm;