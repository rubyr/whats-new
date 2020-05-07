import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    });
    if (e.key === "Enter") this.search();
    if (!e.target.value) this.clearInput();
  }

  clearInput() {
    this.setState({
      input: ""
    });
    this.props.search("");
  }

  search() {
    this.props.search(this.state.input);
  }

  render() {
    return (
      <header className="search-form">
        <h1>What's<span className="yellow">New</span></h1>
        <div>
          {this.state.input && 
            <button 
              className="clear-button" 
              onClick={this.clearInput.bind(this)}>&times;</button>}
          <input 
            className="search-input" 
            role="form" 
            placeholder="Search..." 
            onChange={this.updateInput.bind(this)}
            onKeyDown={this.updateInput.bind(this)}
            value={this.state.input}
            data-testid="search-input"></input>
        </div>
        <button className="search-submit" onClick={this.search.bind(this)}>Search</button>
      </header>
    );
  }
}

export default SearchForm;