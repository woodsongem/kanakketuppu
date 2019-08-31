import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Registration from '../Registration/Registration';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

class Login extends React.Component<LoginProps, LoginState> {
    constructor(LoginProps: Readonly<LoginProps>) {
        super(LoginProps);
    }

    render() {
        return (
            <div className="row">
                <div className="card-panel col s9 offset-s3 m9 offset-m1">
                    <form className="col s12">
                        <div className="row k-row">
                            <div className="input-field col s6">
                                <input id="username" type="text" className="validate" />
                                <label htmlFor="username">User Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row k-row">
                            <div className="col s6">
                                <div className="switch">
                                    <label>
                                        Off
                                            <input type="checkbox"></input>
                                        <span className="lever"></span>
                                        On
                                        </label>
                                </div>
                            </div>
                            <div className="col s6">
                                <Link to={'/forgotpassword'} className="nav-link right">Forgot Password</Link>
                            </div>
                        </div>
                        <div className="row k-row">
                            <div className="input-field col s12">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                            <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row k-row">
                            <div className="input-field col s12 center">
                                <span> Or </span>
                                <Link to={'/registration'} className="nav-link">Sign up </Link>
                                <span> with</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

interface LoginProps {

}

interface LoginState {

}

export default Login;