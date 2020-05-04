import React, { Component } from 'react';
import './NewsContainer.css'

class NewsContainer extends Component {
  render() {
    const {articles} = this.props;
    return (
      <div className="news-container">
        {articles.map(article => (
          <article>
            <h3>{article.headline}</h3>
          </article>
        ))}
      </div>
    )
  }
}

export default NewsContainer;