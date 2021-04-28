import { Component } from "react";
import HrHotelList from "../hotel-list/HotelList";
import HrHotelSearch from "../hotel-search/HotelSearch";
import * as L from 'leaflet';
import './Map.scss';

export default class HrMap extends Component {

  componentDidMount() {
    var map = L.map('leaflet-map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }

  render() {
    return (<div class="component-wrapper">
      <div class="component-container container">
        <HrHotelSearch></HrHotelSearch>
        <div id="leaflet-wrapper">
          <div id="leaflet-map"></div>
        </div>
        <HrHotelList></HrHotelList>
      </div>
    </div>);
  }
}