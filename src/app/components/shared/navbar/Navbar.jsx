import img from '../../../../assets/HRLogo.png';
import imgSignIn from '../../../../assets/Sign_in.png';
import imgInfo from '../../../../assets/information.png';
import imgMap from '../../../../assets/Map.png';

import './Navbar.scss';
import React, { Component } from 'react';

export default class AppNavbar extends Component {
  render () {
    return(
      <nav class = "navbar navbar-light hr-dark-themed" >
        <div class="navbar-brand">
          <a class="nav-item" href="#"><img id="nav-logo-img" src={img} alt="HRLOGO"></img></a>
        </div>
        <div class="navbar navbar-toggler">
          <a class="nav-item" href="#"><img src={imgSignIn} class="nav-img" alt="SIGN IN"></img></a>
          <a class="nav-item" href="#"><img src={imgInfo}  class="nav-img" alt="INFO"></img></a>
          <a class="nav-item" href="#"><img src={imgMap} class="nav-img"  alt="MAP"></img></a>
        </div>
      </nav>
      );
    }              
}

