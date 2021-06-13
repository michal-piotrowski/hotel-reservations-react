import HrAxios, {URL} from "app/http/HrAxios.js";

const { createSlice } = require("@reduxjs/toolkit");


export const formFields = {
  SUGGESTION: 'suggestion',
  DATE_FROM: 'dateFrom',
  DATE_TO: 'dateTo'
}

export const names = {
  mutations: {
    PUT_SUGGESTIONS: 'putSuggestions',
    SEARCH_DESTINATIONS: 'searchDestinations',
    FETCH_SUGGESTIONS: 'fetchSuggestions',
    SET_SELECTED_HOTEL_INDEX: 'setSelectedHotelIndex',
  },
  actions: {
    PUT_LOCATION_FORM_DATA: 'putLocationFormData',
    SET_SELECTED_SUGGESTION: 'setSelectedSuggestion',
    PUT_SUGGESTIONS: 'putSuggestions',
    FETCH_SUGGESTIONS: 'fetchSuggestions',
    SEARCH_DESTINATIONS: 'searchDestinations',
    MERGE_LOCATION_FORM_VALUE: 'mergeLocationFormValue'
  }
}

const initialState = {
  suggestions: [],
  destinations: [],
  locationFormData: {}, //{location: , dateFrom: , dateTo: }
  selectedHotel: {},
  search_text: null,
};

export const slice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    // Cannot contain asynchronous code/ side effect causing code (sync or async). These require useEffect hook or actionCreators.
    // Any modification to state is detected by reduxjs/toolkit, and it takes care of not mutating state object.
    // It simulates modificaiton internally (duplicates state object with patched values) (Immer)
    //
    // Also use action object to pass arguments to the call
    putSuggestions(state, action) {
      state.suggestions = action.payload
    },
    putLocationFormData(state, action) {
      state.locationFormData[action.payload.fieldName] = action.payload.value
    },
    setSearchText(state, action) {
      state.search_text = action.payload
    },
    setFetchedDestinations(state, action) {
      state.destinations = action.payload;
    },
    setSelectedHotel(state, action) {
      state.selectedHotel = action.payload;
    }
  }
});

export const fetchSuggestionsCreator = (searchString) => {
  return dispatch => {
    HrAxios.httpGet(URL.nomLocationsSuggestions + 'search?q=' + searchString + '&format=json')
    .then(response => {
      if (response.data.length != 0) {
        dispatch(slice.actions[names.actions.PUT_SUGGESTIONS](response.data));
      } else {
        dispatch(slice.actions[names.actions.PUT_SUGGESTIONS]([]))
      }
    })
  }
}

function parseSuggestion(nominatimLocation) {
  if (nominatimLocation.includes(',') && nominatimLocation.split(',').length > 1) {
    const suggestionParts = nominatimLocation.split(',');
    return suggestionParts[0] + ' ' + suggestionParts[suggestionParts.length-1];
  } else {
    return nominatimLocation;
  }
}

export const searchDestinationsCreator = (currentSuggestion) => {
  return dispatch => {
    const parsedSuggestion = parseSuggestion(currentSuggestion.display_name);
    return HrAxios.httpGet(URL.rapSearchDestinations + '?query=' + parsedSuggestion)
    .then(response => {
      if (response.data.suggestions[1].entities.length == 0) {
        dispatch(slice.actions.setFetchedDestinations([{ id: -1, caption: 'No results found' }]));
      } else {
        dispatch(slice.actions.setFetchedDestinations(response.data.suggestions[1].entities));
      }
    });
  }
}
export const actions = slice.actions;