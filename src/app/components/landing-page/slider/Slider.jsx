import locationIcoFilled from 'assets/locationIcoFilled_purp.png';
import React, { useEffect, useState } from 'react';
import './Slider.scss';
import { debounce } from 'lodash';
import Suggestions from 'app/inputs/inputWithSuggestions/Suggestions.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { actions, fetchSuggestionsCreator, names as storeNames, formFields, searchDestinationsCreator } from 'app/store/slices.js';
import history, { names as routerNames } from 'app/components/router/router.js';

export default props => {
  let [shouldDisableSearch, setShouldDisableSearch] = useState(null);

  const dispatch = useDispatch();
  // 🙏 useSelector causes a subscription to be automatically created in  redux store for THIS component. 
  // 🙏 The above also means, that whenever the calculated value of this selector changes, the component will be rerendered
  // 🙏 Should this component ever be unmounted, redux will automatically delete the subscription
  let get_suggestions = useSelector(state => state.suggestions );
  let get_search_text = useSelector(state => state.search_text );
  let currentSuggestion = useSelector(state => state.locationFormData && state.locationFormData[formFields.SUGGESTION]);
  let get_location_form_data = useSelector(state => state.locationFormData );
   
  useEffect(() => {
    setShouldDisableSearch(!get_location_form_data || !get_location_form_data[formFields.SUGGESTION]);
  }, [get_location_form_data]);

  // useEffect dependency has to be inside state, or needs to be a prop.
  useEffect(() => {
    dispatch(fetchSuggestionsCreator(get_search_text));
  }, [get_search_text, dispatch]); 
  const clearCollection = () => {
    dispatch(actions.putSuggestions([]));
  }
  const handleLocationSelected = nominSuggestion => {
    dispatch(actions.putLocationFormData({value: nominSuggestion, fieldName: formFields.SUGGESTION}), )
    clearCollection();
  }
  const handleDateToSelected = event => {
    console.log(actions);
    dispatch(actions.putLocationFormData({value: event.target.value, fieldName: formFields.DATE_TO}) )
  }
  const handleDateFromSelected = event => {
    console.log(actions);
    dispatch(actions.putLocationFormData({value: event.target.value, fieldName: formFields.DATE_FROM}) )
  }
  const searchHotels = () => {
    dispatch(searchDestinationsCreator(currentSuggestion));
    history.push(routerNames.RESULTS);
  }
  const queryMatching = value => {
    debouncedQueryMatch(value, this);
  }
  const debouncedQueryMatch = debounce(function (value, vm) {
    dispatch(actions.setSearchText(value.target.value));
  }, 1000);

  return (
    <div>
      <div >
        <div id="sub-wrapper">
          <div id="sliderForm">
            <div id="sliderImgWrapper">
              <div id="sliderImg"></div>
            </div>
            <div className="col-md-4 midpageComponent" id="sloganLeft">Begin your journey</div>
            <div className="col-md-4 midpageComponent" id="formMiddle">
              <div className="container" id="form-container">
                <div id="textBanner" className="row ">
                  <p id="text-mid">Looking for a hotel?</p>
                </div>
                <div className="row" id="landing-where">
                  <img id="landing-where-image" src={locationIcoFilled} alt="GPS" />
                  <Suggestions
                    inputStyle={{ position: 'relative', zIndex: 2 }}
                    locationSelectedHandler={handleLocationSelected}
                    inputHandler={queryMatching}
                    containerStyle={{ width: 'calc(100% - 2.8em)' }}
                    collection={get_suggestions}
                    placeholder={'Your searched location'} />
                </div>
                <div className="row">
                  <div id="landing-from-wrapper" className="col-sm-6">
                    <div id="landing-from" >
                      <input onInput={handleDateFromSelected} id="landing-date-from-input" className="form-control" type="date" placeholder="Date from" />
                    </div>
                  </div>
                  <div id="landing-to-wrapper" className="col-sm-6">
                    <div id="landing-to" >
                      <input onInput={handleDateToSelected} id="landing-date-to-input" className="form-control" type="date" placeholder="Date to" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center" id="search-wrapper">
                  <button onClick={searchHotels} disabled={shouldDisableSearch} id="search-button" className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 midpageComponent" id="sloganRight">Search locations around the globe using combined data from major hotel searches</div>
          </div>
        </div>
      </div>
    </div>
  );
  
}