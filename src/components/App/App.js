import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "local",
      filter: ""
    }
    this.fetchNews();
  }

  fetchNews() {
    fetch("https://whats-new-api.herokuapp.com/api/v1/news")
      .then(response => response.json())
      .then(data => {
        for (const category in data) {
          this.setState({
            [category]: data[category]
          });
        }
      }
    );
  }

  pickTopic(topic) {
    this.setState({
      currentTab: topic.toLowerCase()
    });
  }

  filterArticles(searchInput) {
    this.setState({
      filter: searchInput
    });
  }

  render() {
    const articles = this.state.local ? (
      <NewsContainer
        articles={this.state[this.state.currentTab]}
        filter={this.state.filter}
      />
    ) : (
      <h3>Loading articles, please wait...</h3>
    );
    return (
      <React.Fragment>
        <SearchForm search={this.filterArticles.bind(this)} />
        <div className="app">
          <Menu
            selected={this.state.currentTab}
            pickTopic={this.pickTopic.bind(this)}
          />
          {articles}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
