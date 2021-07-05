import { Component } from "react";
import HrHotelList from "../hotel-list/HotelList.jsx";
import HrHotelSearch from "../hotel-search/HotelSearch.jsx";
import * as L from 'leaflet';
import './Map.scss';
import { connect } from "react-redux";
import { formFields } from "app/store/slices.js";
import { isEmpty } from "lodash";
import HrTool from "app/helpers/HrTool.js";

class HrMap extends Component {
  constructor() {
    super();
    //line below defines local state. Redux state is available under this.props. e.g. const newLocationData = this.props && this.props.locationFormData;
    this.state = {
      map: null,
      layerGroup: null,
      get_location_form_data: null
    }
  }

  addMarker(lat, lon) {

    if (lat && lon) {
      if (!this.state.layerGroup) {
        L.layerGroup().addTo(L.map('leaflet-map'));
      }
      L.marker([lat, lon], {icon: HrTool.getDefaultMarker()}).addTo(this.state.layerGroup);
    }
  }
  
  addMarkers() {
    for (let location of this.props.destinations) {
      if (location.longitude && location.latitude)
        this.addMarker(location.latitude, location.longitude);
    }
  }

  componentDidUpdate() {
    if (this.state.map) {
      const newLocationData = this.props && this.props.locationFormData; // this is a value from state. Not a prop
      this.addMarkers();
      if (newLocationData[formFields.SUGGESTION]) {
        this.state.map.setView([newLocationData[formFields.SUGGESTION].lat, newLocationData[formFields.SUGGESTION].lon], 13);
      }
    }
  }

  componentDidMount() {
    const lMap = L.map('leaflet-map');
    const newLocationData = this.props && this.props.locationFormData;
    // The three 'setState' calls will be optimized into one somewhere later. 
    // Therefore, one cannot rely on this.state.map being updated after first call to setState.
    // Hence, we don't do ...L.layerGroup().addTo(this.state.map)... because this.state.map has not yet been udpated.
    this.setState({ map: lMap });
    this.setState({ layerGroup: L.layerGroup().addTo(lMap) });
    this.setState({ get_location_form_data: newLocationData });
    if (isEmpty(newLocationData) && isEmpty(newLocationData[formFields.SUGGESTION])) {
      lMap.setView([51.505, -0.09], 13);
    } else {
      document.querySelector('#leaflet-map').scrollIntoView();
      if (newLocationData[formFields.SUGGESTION]) {
        lMap.setView([newLocationData[formFields.SUGGESTION].lat, newLocationData[formFields.SUGGESTION].lon], 13);
      }
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(lMap);
    this.addMarkers();
  }

  render() {
    return (
      <div className="component-wrapper">
        <div className="component-container container">
          <HrHotelSearch></HrHotelSearch>
          <div id="leaflet-wrapper">
            <div id="leaflet-map"></div>
          </div>
          <HrHotelList></HrHotelList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HrMap);