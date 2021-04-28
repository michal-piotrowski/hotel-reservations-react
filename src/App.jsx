
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';
import HrNavbar from './app/components/shared/navbar/Navbar.jsx';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HrSlider from './app/components/landing-page/slider/Slider.jsx';
import HrMap from 'app/components/hotel/hotel-browser/hotel-map/Map.jsx';
import HrLogin from 'app/components/profile/Login';
import HrTos from 'app/components/tos/Tos';
import HrProfile from 'app/components/profile/profile/Profile';
import HrBook from 'app/components/hotel/hotel-browser/hotel/booking/Booking';

function App() {
  return (
    <HashRouter>
      <div>
        <HrNavbar />
        <Switch>          
          <Route path="/profile">
            <HrProfile />
          </Route>
          <Route path="/results/:id">
            <HrBook />
          </Route>
          <Route path="/results">
            <HrMap />
          </Route>
          <Route path="/tos">
            <HrTos />
          </Route>
          <Route path="/login">
            <HrLogin />
          </Route>
          <Route path="/map">
            <HrMap />
          </Route>
          <Route path="/">
            <HrSlider />
          </Route>
        </Switch>
        <div id="footer" class="row">
          <div id="footerLinks">
            <p>© Hotel Reservations</p>
            <p>All rights reserved</p>
            <p>About us</p>
            <p>Contact</p>
            <p>Legal</p>
            <p>Terms of use</p>
            <p>GDPR</p>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
