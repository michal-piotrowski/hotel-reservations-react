import { Component } from "react";
import './Login.scss';
import infoImg from 'assets/login/information.png';


export default class HrLogin extends Component {
  render() {
    return (
      <div className="component-wrapper" id="login-wrapper">
        <div className="row" id="login-inter-wrapper">
          <div id="login-spacer-left" className="col-md-4">
              
          </div>
          <div className="col-md-4" >
            <div id="login-component-wrapper">
              <div className="container login-component-header">
                <div className="container login-component-header sign-in">
                  <span>Log in</span>
                </div>
                <div className="container login-component-header sign-up">
                  <span>Sign up</span>
                </div>
              </div>
              <div className="container login-component">
                <div id="login-form-wrapper">
                  <label htmlFor="email-address" id="email-address-label">E-mail address</label>
                </div>
                <div id="address-input-wrapper">
                  <input id="email-address-input"/>
                </div>
                <label htmlFor="password" id="password-label">Password</label>
                <div id="password-input-wrapper">
                  <input id="password-input"/>
                </div>
                <div id="signin-button">
                  <button className="btn btn-primary">Sign in</button>
                </div>
              </div>
            </div>
          </div>  
          <div id="login-info" className="col-md-4">
            <div>
              <div id="info-icon-wrapper">
                <img id="info-icon" src={infoImg} alt="INFO"/>
              </div>
              <span>Creating an account will let you save and retrieve information about the bookings you’ve made with Hotel Reservations. </span>
            </div>
          </div>  
        </div>
      </div>
  );
  }
}