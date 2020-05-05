import React, { Component } from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

class NewsContainer extends Component {
  render() {
    const {articles} = this.props;
    return (
      <div className="news-container">
        {articles.map(article => (
          <NewsArticle key={article.id} content={article}/>
        ))}
      </div>
    )
  }
}

export default NewsContainer;