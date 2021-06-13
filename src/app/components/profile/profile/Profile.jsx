import { Component } from "react";

export default class HrProfile extends Component {
  render() {
    return (
      <div className="component-wrapper" >
        <div className="component-container">
          <div id="profile-wrapper">
            <div id="profile-card">
              <div id="avatar">
                <img src="assets/profile/emptyProfile.png" alt="AVAT"/>
              </div>
              <div id="card-rows">
                <div className="card-row" id="name"><span className="hr-left hr-marg-r">John Doe</span><i className="fa fa-edit hr-left" title="Edit profile data"></i></div>
                <div className="card-row"><i className="fa fa-phone hr-left hr-marg-r"></i>phone</div>
                <div className="card-row"><i className="fa fa-at hr-left hr-marg-r"></i>email</div>
                <div className="card-row"><i className="fa fa-passport hr-left hr-marg-r"></i>nationality</div>
              </div>
            </div>
          </div>
          <div id="reservations-list">
            <hr/>
            <h4>Reservations list </h4>
            <hr/>
            <div className="flx lft" id="filters">
              <div>
                <input type="checkbox" className=""/><span className="hr-marg-r5"> Pending</span>
              </div>
              <div>
                <input type="checkbox" className=""/><span className="hr-marg-r5"> Cancelled</span>
              </div>
              <div>
                <input type="checkbox" className=""/><span className="hr-marg-r5"> Past</span>
              </div>
            </div>
            <div>
              Nemo enim ipsam voluptatem quia
            </div>
            <div>
              Nemo enim ipsam voluptatem quia
            </div>
            <div>
              Nemo enim ipsam voluptatem quia
            </div>
            <div id="book-wrapper" className="row justify-content-center">
            </div>  
          </div>
        </div>
      
      </div>
    );
  }  
}