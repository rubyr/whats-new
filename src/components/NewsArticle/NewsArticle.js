import React from 'react';
import './NewsArticle.css';

const NewsArticle = props => {
  const {headline, img, url, description} = props.content;
  return (
    <article 
      className="news-article" 
      onClick={() => window.open(url, "_blank")}
    >
      <img src={img} alt={headline} />
      <h3>{headline}</h3>
      <p className="news-article-description">{description}</p>
    </article>
  )
}

export default NewsArticle;