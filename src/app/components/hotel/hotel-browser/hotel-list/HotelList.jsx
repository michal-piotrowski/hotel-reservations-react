import { Component } from "react";
import './HotelList.scss';
import placeholder from "assets/map/placeholder.png";
import placeIcon from "assets/map/place.png";
import distanceIcon from 'assets/map/distance-ico-no-bg.png';

export default class HrHotelList extends Component {
  render() {
    return (
      <div id="hotel-list-wrapper">
        <div class="selected-hotel-row hotel-row">
          <div class="row">
            <div id="hotel-thumb-wrapper">
              <img id="hotel-img-thumb" src={placeholder} alt="DIST"/>
            </div>
            <div class="col-md-9 summary">
              <h3 for="search-input" class="hotel-info-label">Dolder grand</h3>
              <div class="hotel-info-label">
                <img id="distance-icon" src={distanceIcon} alt="DIST"/>
                <label for="search-input">10,2 km from destination in a straight line</label>
              </div>
              <div class="hotel-info-label">
                <img id="place-icon" src={placeIcon} alt="PLACE"/>
                <label for="search-input">N 47° 22' 19''	E 8° 34' 30''</label>
              </div>
            </div>
          </div>
          <hr/>
          <div id="book-btn-wrapper">
            <button id="book-now-btn" class="btn btn-primary">Book now</button>
            <button id="book-details-btn" class="btn btn-secondary">Show details</button>
          </div>
        </div>
        <div class="unselected-hotel-row hotel-row">
          <img id="hotel-img-thumb" src={placeholder} alt="HOTEL"/>
          <label for="search-input" class="search-input-label">Searched:</label>
        </div>
      </div>);
  }
}