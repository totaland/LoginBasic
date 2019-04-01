import React from "react";
import {Route, Switch} from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import GetAccess from "./GetAccess";
import PersonalProfile from "../routes/PersonalProfile";
import Report from "../routes/Report";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";


export default ({childProps}) =>

    <Switch>
        <AuthenticatedRoute path="/" exact component={GetAccess} props={childProps}/>
        <AuthenticatedRoute path="/profile" exact component={PersonalProfile} props={childProps}/>
        <AuthenticatedRoute path="/report" exact component={Report} props={childProps}/>
        <UnauthenticatedRoute path="/login" exact component={SignInForm} props={childProps}/>
        <UnauthenticatedRoute path="/register" exact component={SignUpForm} props={childProps}/>
        { /* Finally, catch all unmatched routes */}
        {/*<Route component={NotFound} />*/}
    </Switch>;
