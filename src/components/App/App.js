import React, { Component } from 'react';
import local from '../../data/local';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
// import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      health,
      science,
      technology,
      entertainment,
      currentTab: "local"
    }
  }

  pickTopic(topic) {
    this.setState({
      currentTab: topic.toLowerCase()
    });
  }

  render () {
    return (
      <div className="app">
        {/* <SearchForm /> */}
        <Menu selected={this.state.currentTab} pickTopic={this.pickTopic.bind(this)} />
        <NewsContainer articles={this.state[this.state.currentTab]}/>
      </div>
    );
  }
}

export default App;
