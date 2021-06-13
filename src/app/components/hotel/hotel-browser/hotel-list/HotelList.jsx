import { Component } from "react";
import HotelSummary from "../hotel/HotelSummary.jsx";
import { connect } from "react-redux";

class HrHotelList extends Component {
  componentDidUpdate() {
    console.log(this.props.selectedHotel);
  }
  render() {
    const summaries = this.props.destinations.map((summary, ind) => {
      return <HotelSummary hotelSummary={summary} expanded={ind==this.props.selectedHotel} arrayPos={ind} key={ind}></HotelSummary>
    })
    return (
      <div id="hotel-list-wrapper">
        {summaries}
      </div>);
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HrHotelList);