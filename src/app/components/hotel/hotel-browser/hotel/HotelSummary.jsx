import { actions, formFields } from "app/store/slices";
import { Component, Fragment } from "react";
import { connect } from "react-redux";
import './HotelSummary.scss';
import placeholder from "assets/map/placeholder.png";
import placeIcon from "assets/map/place.png";
import distanceIcon from 'assets/map/distance-ico-no-bg.png';
import HrTool from "app/helpers/HrTool";
import history, { names as routerNames } from 'app/components/router/router';

class HotelSummary extends Component {

  constructor() {
    super();
    // this.expanded = false
    this.state = {
      distanceFromSearched: null,
      get_location_form_data: null
    }
  }

  detectChange = () => {
    if (this.props) {
      const currentSuggestion = this.props.locationFormData.suggestion;
      const newDistanceFromSearched = HrTool.distance(currentSuggestion.lat, currentSuggestion.lon, this.props.hotelSummary.latitude, this.props.hotelSummary.longitude);
      this.setState({ distanceFromSearched: newDistanceFromSearched });
      // if (this.props.distanceFromSearched != newDistanceFromSearched) { 
      // }
      const newFormattedGeo = HrTool.formatGeo(currentSuggestion.lat + ", " + currentSuggestion.lon);
      this.setState({ formattedGeo: newFormattedGeo });
      // if (this.props.formattedGeo != newFormattedGeo) { 
      // }
    }
  }

  // componentDidUpdate() {
  //   this.expanded = this.props.selectedHotel == this.props.arrayPos;
  // }

  componentDidMount() {
    this.detectChange();
  }

  setSelectedHotel = () => {
    this.props.setSelectedHotel(this.props.arrayPos);
  }
  goToDetails = (id) => {
    history.push('/' + routerNames.RESULTS + '/' + id);
  }

  render() {
    const expandedPart = this.props.expanded
      ? (<Fragment>
          <hr/>
          <div id="book-btn-wrapper">
            <button id="book-now-btn" className="btn btn-primary">Book now</button>
          <button onClick={() => this.goToDetails(this.props.arrayPos)} id="book-details-btn" className="btn btn-secondary">Show details</button>
          </div>
        </Fragment>)
      : null
    return (
      <Fragment>
        <div  onClick={ this.setSelectedHotel } className={this.props.expanded ? 'selected-hotel-row' : 'unselected-hotel-row', 'hotel-row'}>
          <div className="row">
            <div id="hotel-thumb-wrapper">
              <img id="hotel-img-thumb" src={placeholder} alt="DIST"/>
            </div>
            <div className="col-md-9 summary">
              <h3 htmlFor="search-input" className="hotel-info-label" dangerouslySetInnerHTML={{ __html: this.props.hotelSummary.caption}}></h3>
              <div className="hotel-info-label">
                <img id="distance-icon" src={distanceIcon} alt="DIST"/>
                <label htmlFor="search-input">{this.state.distanceFromSearched}m from destination in a straight line</label>
              </div>
              <div className="hotel-info-label">
                <img id="place-icon" src={placeIcon} alt="PLACE"/>
                <label htmlFor="search-input">{this.state.formattedGeo}</label>
              </div>
            </div>
          </div>
          {expandedPart}
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSelectedHotel: (name) => dispatch(actions.setSelectedHotel(name))
});
const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(HotelSummary);