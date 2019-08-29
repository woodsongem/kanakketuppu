import React, { } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from '../../Authentication/Login/Login';
import Contact from '../../Contact/Contact';
import Home from '../../Home/Home';
import Registration from '../../Authentication/Registration/Registration';
import ForgotPassword from '../../Authentication/ForgotPassword/ForgotPassword';

class Header extends React.Component<HeaderProps, HeaderState>{
  constructor(HeaderProps: Readonly<HeaderProps>) {
    super(HeaderProps);
  }

  render() {
    return (

      <nav>
        <div className="nav-wrapper white">
          <Link to={'/'} className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link> </li>
          </ul>
        </div>
      </nav>

    );
  }
}

interface HeaderProps {

}

interface HeaderState {

}

export default Header;