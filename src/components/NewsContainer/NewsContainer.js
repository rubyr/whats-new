import React, { Component } from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

class NewsContainer extends Component {

  showArticle(article, filter) {
    filter = filter.toLowerCase();
    const headline = article.headline.toLowerCase();
    const desc = article.description.toLowerCase();
    return headline.includes(filter) || desc.includes(filter);
  }

  render() {
    const articleDisplay = this.props.articles.map((article) =>
      this.showArticle(article, this.props.filter) && (
        <NewsArticle key={article.id} content={article} />
      )
    );
    return (
      <div className="news-container" data-testid="news-container">
        {articleDisplay}
      </div>
    )
  }
}

export default NewsContainer;