import {isEmpty} from 'lodash';
import { Component, createRef } from 'react';
import './Suggestions.scss';

export default class Suggestions extends Component {

  constructor() {
    super();
    this.delayHideCollection = this.delayHideCollection.bind(this);
    this.suggestionClicked = this.suggestionClicked.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.suggestionsInput = createRef();
    this.results = createRef();
    this.state = {
      shouldShowCollection: false
    }
  }

  delayHideCollection() {
    const vm = this
    setTimeout(() => {
      vm.setState({ shouldShowCollection: false });
    }, 200);
  }
  suggestionClicked(suggestion) {
    this.suggestionsInput.current.value = suggestion && suggestion.display_name;
    this.props.locationSelectedHandler(suggestion);
  }
  handleInput(value) {
    this.setState({ shouldShowCollection: true });
    this.props.inputHandler(value);
  }
  getDisplayName(suggestion) {
    return suggestion.display_name;
  }
  isSelectable(suggestion) {
    return suggestion && suggestion.display_name != 'No results found';
  }

  render() {
    const listOfSuggestions = this.props && this.props.collection && this.props.collection.map((suggestion, id) => {
      return (<li onClick={event => this.suggestionClicked(suggestion)}
        className={'suggestion-text ' + ( this.isSelectable(suggestion) ? 'highlightable ' : '')}
        title={this.getDisplayName(suggestion)} key={ id }>
        {this.getDisplayName(suggestion)}
      </li>);
    })

    const list = (!isEmpty(this.props && this.props.collection) && this.suggestionsInput.current && this.suggestionsInput.current.value && this.state && this.state.shouldShowCollection)
    ? (<ul ref={this.results} id="result-list"> {listOfSuggestions} </ul>)
    : null

    return (
    <div style={this.props.containerStyle}>
      <div>
        <input ref={this.suggestionsInput} onBlur={this.delayHideCollection} onInput={this.handleInput} id="landing-where-input" placeholder={this.props.placeholder} style={this.props.inputStyle} className="form-control" autoComplete="off"/>
        <div id="suggestion-list-wrapper">
          {list}
        </div>
      </div>
    </div>)
  }
}