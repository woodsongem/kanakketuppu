import React from 'react';
import './App.css';
import Header from './components/Nav/Header/Header';
import Footer from './components/Nav/Footer/Footer';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Login from './components/Authentication/Login/Login';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Registration from './components/Authentication/Registration/Registration';
import ForgotPassword from './components/Authentication/ForgotPassword/ForgotPassword';
const App: React.FC = () => {
  return (
    <Router basename="/">
      <div>
        <Header />
        <div className="container">
          <Route path='/login' component={Login}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route exact path='/' component={Home}></Route>
          <Route path='/registration' component={Registration}></Route>
          <Route path='/forgotpassword' component={ForgotPassword}></Route>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
