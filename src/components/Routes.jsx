import React from "react";
import {Route, Switch} from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import BodyLayOut from "./BodyLayout";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";


export default ({childProps}) =>
    <Switch>
        <AuthenticatedRoute path="/" exact component={BodyLayOut} props={childProps}/>
        <UnauthenticatedRoute path="/login" exact component={SignInForm} props={childProps}/>
        <UnauthenticatedRoute path="/register" exact component={SignUpForm} props={childProps}/>
        { /* Finally, catch all unmatched routes */}
        {/*<Route component={NotFound} />*/}
    </Switch>;
