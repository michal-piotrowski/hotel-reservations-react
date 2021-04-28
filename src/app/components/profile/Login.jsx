import { Component } from "react";
import './Login.scss';
import infoImg from 'assets/login/information.png';


export default class HrLogin extends Component {
  render() {
    return (
      <div class="component-wrapper" id="login-wrapper">
        <div class="row" id="login-inter-wrapper">
          <div id="login-spacer-left" class="col-md-4">
              
          </div>
          <div class="col-md-4" >
            <div id="login-component-wrapper">
              <div class="container login-component-header">
                <div class="container login-component-header sign-in">
                  <span>Log in</span>
                </div>
                <div class="container login-component-header sign-up">
                  <span>Sign up</span>
                </div>
              </div>
              <div class="container login-component">
                <div id="login-form-wrapper">
                  <label for="email-address" id="email-address-label">E-mail address</label>
                </div>
                <div id="address-input-wrapper">
                  <input id="email-address-input"/>
                </div>
                <label for="password" id="password-label">Password</label>
                <div id="password-input-wrapper">
                  <input id="password-input"/>
                </div>
                <div id="signin-button">
                  <button class="btn btn-primary">Sign in</button>
                </div>
              </div>
            </div>
          </div>  
          <div id="login-info" class="col-md-4">
            <div>
              <div id="info-icon-wrapper">
                <img id="info-icon" src={infoImg} alt="INFO"/>
              </div>
              <span>Creating an account will let you retrieve information about the booking you’ve made with Hotel Reservations. </span>
            </div>
          </div>  
        </div>
      </div>
  );
  }
}