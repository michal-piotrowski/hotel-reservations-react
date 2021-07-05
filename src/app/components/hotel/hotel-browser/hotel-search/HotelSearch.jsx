import { Component, useEffect, useState } from "react";
import HrTool from 'app/helpers/HrTool.js';
import './HotelSearch.scss';
import searchIcon from 'assets/map/magnif_glas.png';
import dateIcon from "assets/date_range_24px_outlined.png";
import Suggestions from "app/inputs/inputWithSuggestions/Suggestions.jsx";
import { actions, fetchSuggestionsCreator, names as storeNames, formFields, searchDestinationsCreator } from 'app/store/slices.js';

import { connect, useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

export default props => {

  let [shouldDisableSearch, setShouldDisableSearch] = useState(null);
  const dispatch = useDispatch();
  let get_suggestions = useSelector(state => state.suggestions );
  let get_search_text = useSelector(state => state.search_text );
  let get_location_form_data = useSelector(state => state.locationFormData );
  let currentSuggestion = useSelector(state => state.locationFormData && state.locationFormData[formFields.SUGGESTION]);
  let dateFrom = useSelector(state => state.locationFormData && state.locationFormData[formFields.DATE_FROM]);
  let dateTo = useSelector(state => state.locationFormData && state.locationFormData[formFields.DATE_TO]);

  const handleLocationSelected = nominSuggestion => {
    dispatch(actions.putLocationFormData({ value: nominSuggestion, fieldName: formFields.SUGGESTION }));
    clearCollection();
  }

  const clearCollection = () => {
    dispatch(actions.putSuggestions([]));
  }
  const debouncedQueryMatch = debounce(function (value, vm) {
    dispatch(actions.setSearchText(value.target.value));
  }, 1000);
  const queryMatching = value => {
    debouncedQueryMatch(value, this);
  }
  const handleSearch = () => {
    document.querySelector('#leaflet-map').scrollIntoView();
    dispatch(searchDestinationsCreator(currentSuggestion));
  }
  useEffect(() => {
    setShouldDisableSearch(!get_location_form_data || !get_location_form_data[formFields.SUGGESTION]);
  }, [get_location_form_data]);
  
  useEffect(() => {
    dispatch(fetchSuggestionsCreator(get_search_text));
  }, [get_search_text, dispatch]);

  return (
    <div>
      <div id="search-input-wrapper">
        <img alt="ICO" id="search-icon" src={searchIcon} />
        <div className="row">
          <label className="search-input-label" htmlFor="search-input">{HrTool.translate("Searched:")}</label>
          <Suggestions
            collection={get_suggestions}
            locationSelectedHandler={handleLocationSelected}
            inputStyle={{ border: 'none' }}
            inputHandler={queryMatching}
            containerStyle={{ height: '3em', width: '84%', float: 'left', minWidth: '10em' }}
            placeholder={get_location_form_data && get_location_form_data[formFields.SUGGESTION] && get_location_form_data[formFields.SUGGESTION].display_name} />
        </div>
      </div>
      <div id="date-pickers-wrapper">
        <div id="date-from-wrapper">
          <img alt="ICO" id="search-icon" src={dateIcon} />
          <label className="search-input-label" htmlFor="search-input">{HrTool.translate('Check-out')}</label>
          <i id="chev-date-from-left" className="fa fa-chevron-left"></i>
          {/* below two way binding  */}
          <input value={ dateFrom} placeholder="dd-mm-yyyy" type="text" className="date-input" />
          <i id="chev-date-from-right" className="fa fa-chevron-right"></i>
        </div>
        <div id="date-to-wrapper">
          <img alt="ICO" id="search-icon" src={dateIcon} />
          <label className="search-input-label" htmlFor="search-input">{HrTool.translate('Arrival')}</label>
          <i id="chev-date-to-left" className="fa fa-chevron-left"></i>
          {/* below two way binding  */}
          <input placeholder="dd-mm-yyyy"  value={ dateTo} type="text" className="date-input" />
          <i id="chev-date-to-right" className="fa fa-chevron-right"></i>
        </div>
      </div>
      <div style={{ justifyContent: 'center', display: 'flex', padding: '5px 50px 15px 50px' }} className="cell" >
        <button onClick={handleSearch} disabled={shouldDisableSearch} className="btn btn-primary" style={{ width: '100%' }}>Search</button>
      </div>
    </div>
  );
}
