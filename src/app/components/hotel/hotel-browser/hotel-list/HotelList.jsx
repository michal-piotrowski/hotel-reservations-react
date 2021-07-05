import { Component } from "react";
import HotelSummary from "../hotel/HotelSummary.jsx";
import { connect } from "react-redux";
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
class HrHotelList extends Component {
  
  componentDidUpdate() {
    console.log(this.props.selectedHotel);
  }
  render() {
    const fetchingState = this.props.fetchingState;
    if (fetchingState == 'fetching') {
      return (
        <div style={{textAlign: 'center', color: 'grey'}} className="container">
          <FontAwesomeIcon icon={ faSpinner } spin/>
        </div>
      );
    } else {
      const summaries = this.props.destinations.map((summary, ind) => {
        return <HotelSummary hotelSummary={summary} expanded={ind==this.props.selectedHotel} arrayPos={ind} key={ind}></HotelSummary>
      })
      return (
        <div id="hotel-list-wrapper">
          {summaries}
        </div>);
    }
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HrHotelList);