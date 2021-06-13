
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';
import HrNavbar from './app/components/shared/navbar/Navbar.jsx';
import { Route, Router, Switch } from 'react-router-dom';
import HrSlider from './app/components/landing-page/slider/Slider.jsx';
import HrMap from 'app/components/hotel/hotel-browser/hotel-map/Map.jsx';
import HrLogin from 'app/components/profile/Login';
import HrTos from 'app/components/tos/Tos';
import HrProfile from 'app/components/profile/profile/Profile.jsx';
import HrBook from 'app/components/hotel/hotel-browser/hotel/booking/Booking';
import { Provider } from 'react-redux';
import store from 'app/store/index.js';
import history from 'app/components/router/router.js';
import { names as routerNames} from 'app/components/router/router';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <HrNavbar />
          <Switch>          
            <Route name={routerNames.PROFILE} path="/profile">
              <HrProfile />
            </Route>
            <Route name={routerNames.RESULTS_ID} path="/results/:id">
              <HrBook />
            </Route>
            <Route name={routerNames.RESULTS} path="/results">
              <HrMap />
            </Route>
            <Route name={routerNames.TOS} path="/tos">
              <HrTos />
            </Route>
            <Route name={routerNames.LOGIN} path="/login">
              <HrLogin />
            </Route>
            <Route name={routerNames.ROOT} path="/">
              <HrSlider />
            </Route>
          </Switch>
          <div id="footer" className="row">
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
      </Router>
    </Provider>
  );
}

export default App;
