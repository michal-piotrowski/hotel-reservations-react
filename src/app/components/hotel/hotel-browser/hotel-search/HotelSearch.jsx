import { Component } from "react";
import HrTool from 'app/helpers/HrTool.js';
import './HotelSearch.scss';
import searchIcon from 'assets/map/magnif_glas.png';
import dateIcon from "assets/date_range_24px_outlined.png";


export default class HrHotelSearch extends Component {
  render() {
    return (
      <div>
        <div id="search-input-wrapper">
          <img id="search-icon" src={searchIcon}/>
          <label class="search-input-label" for="search-input">{HrTool.translate('Searched:')}</label>
          <input type="text" id="search-input"/>
        </div>
        <div id="date-pickers-wrapper">
          <div id="date-from-wrapper">
            <img id="search-icon" src={dateIcon}/>
            <label class="search-input-label" for="search-input">{HrTool.translate('Check-out')}</label>
            <i id="chev-date-from-left" class="fa fa-chevron-left"></i>
            <input placeholder="dd-mm-yyyy" type="text" class="date-input"/>
            <i id="chev-date-from-right" class="fa fa-chevron-right"></i>
          </div>
          <div id="date-to-wrapper">
            <img id="search-icon" src={dateIcon}/>
            <label class="search-input-label" for="search-input">{HrTool.translate('Arrival')}</label>
            <i id="chev-date-to-left" class="fa fa-chevron-left"></i>
            <input placeholder="dd-mm-yyyy" type="text" class="date-input"/>
            <i id="chev-date-to-right" class="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
  );
  }
}