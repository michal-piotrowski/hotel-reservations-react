import img from '../../../../assets/HRLogo.png';
import imgSignIn from '../../../../assets/Sign_in.png';
import imgInfo from '../../../../assets/information.png';
import imgMap from '../../../../assets/Map.png';

import './Navbar.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HrNavbar extends Component {
  render () {
    return(
      <nav className="navbar navbar-light hr-dark-themed" >
        <div className="navbar-brand">
          <Link className="nav-item" to="/"><img id="nav-logo-img" src={img} alt="HRLOGO"></img></Link>
        </div>
        <div className="navbar navbar-toggler">
          <Link className="nav-item" to="/login"><img src={imgSignIn} className="nav-img" alt="SIGN IN"></img></Link>
          <Link className="nav-item" to="/tos"><img src={imgInfo}  className="nav-img" alt="INFO"></img></Link>
          <Link className="nav-item" to="/results"><img src={imgMap} className="nav-img"  alt="MAP"></img></Link>
        </div>
      </nav>
      );
    }              
}

