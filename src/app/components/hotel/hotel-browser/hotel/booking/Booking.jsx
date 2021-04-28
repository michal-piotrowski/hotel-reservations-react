import { Component } from "react";

export default class HrBook extends Component {
  render() {
    return (
      <div class="component-wrapper" id="login-wrapper">
        <div class="component-container">
          <div class="row" id="hotel-content">
            <h2>Dolder Grand</h2>
            <div>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </div>
            <div id="book-wrapper" class="row justify-content-center">
              <button id="book-button" class="btn btn-primary">Book now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}