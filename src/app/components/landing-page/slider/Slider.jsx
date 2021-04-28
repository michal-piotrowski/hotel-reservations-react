import locationIcoFilled from 'assets/locationIcoFilled_purp.png';
import dateImg from 'assets/date_range_24px_outlined.png';
import React, { Component } from 'react';
import './Slider.scss';
// import { img } from 'getImage.js';

export default class HrSlider extends Component {
  render() {
    return (
      <div>
        <div >
          <div id="sub-wrapper">
            <div id="sliderForm">
              <div id="sliderImgWrapper">
                <div id="sliderImg">
                </div>
              </div>
              <div class="col-md-4 midpageComponent" id="sloganLeft">Begin your journey</div>
              <div class="col-md-4 midpageComponent" id="formMiddle">
                <div class="container" id="form-container">
                  <div id="textBanner" class="row ">
                    <p>Looking for a hotel?</p>
                  </div>
                  <div class="row" id="landing-where">
                    <img id="landing-where-image" src={locationIcoFilled} alt="GPS" />
                    <input id="landing-where-input" type="text" placeholder="Your searched location" />
                  </div>
                  <div class="row">
                    <div id="landing-from-wrapper" class="col-sm-6">
                      <div id="landing-from" >
                        <img id="landing-date-from" src={dateImg} alt="DATE" />
                        <input id="landing-date-from-input" class="form-control" type="text" placeholder="Date from" />
                      </div>
                    </div>
                    <div id="landing-to-wrapper" class="col-sm-6">
                      <div id="landing-to" >
                        <img id="landing-date-to" src={dateImg} alt="DATE" />
                        <input id="landing-date-to-input" class="form-control" type="text" placeholder="Date to" />
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center" id="search-wrapper">
                    <button id="search-button" class="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
              <div class="col-md-4 midpageComponent" id="sloganRight">Search locations around the globe using combined data from major hotel searches</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}