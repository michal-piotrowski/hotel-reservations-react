import { Component } from "react";

export default class HrProfile extends Component {
  render() {
    return (
      <div class="component-wrapper" >
        <div class="component-container">
          <div id="profile-wrapper">
            <div id="profile-card">
              <div id="avatar">
                <img src="assets/profile/emptyProfile.png" alt="AVAT"/>
              </div>
              <div id="card-rows">
                <div class="card-row" id="name"><span class="hr-left hr-marg-r">John Doe</span><i class="fa fa-edit hr-left" title="Edit profile data"></i></div>
                <div class="card-row"><i class="fa fa-phone hr-left hr-marg-r"></i>phone</div>
                <div class="card-row"><i class="fa fa-at hr-left hr-marg-r"></i>email</div>
                <div class="card-row"><i class="fa fa-passport hr-left hr-marg-r"></i>nationality</div>
              </div>
            </div>
          </div>
          <div id="reservations-list">
            <hr/>
            <h4>Reservations list </h4>
            <hr/>
            <div class="flx lft" id="filters">
              <div>
                <input type="checkbox" class=""/><span class="hr-marg-r5"> Pending</span>
              </div>
              <div>
                <input type="checkbox" class=""/><span class="hr-marg-r5"> Cancelled</span>
              </div>
              <div>
                <input type="checkbox" class=""/><span class="hr-marg-r5"> Past</span>
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
            <div id="book-wrapper" class="row justify-content-center">
            </div>  
          </div>
        </div>
      
      </div>
    );
  }  
}