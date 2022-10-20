import React, { Component } from 'react'
import { Route, Navigate, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class AuthenticatedRoute extends Component{
    render(){
        if (AuthenticationService.isUserLoggedIn()){
            return{...this.props.children}
        }
        else {return <Navigate to="/login" />}
    }
}

export default AuthenticatedRoute