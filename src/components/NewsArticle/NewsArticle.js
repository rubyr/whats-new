import React from 'react';
import './NewsArticle.css';

const NewsArticle = props => {
  const {headline, img, url, description} = props.content;
  const openURL = () => window.open(url, "_blank");
  const checkKey = (e) => e.key === "Enter" && openURL();
  return (
    <article 
      className="news-article" 
      onClick={openURL}
      onKeyDown={checkKey}
      tabIndex={0}
    >
      <img src={img} alt={headline} />
      <h3>{headline}</h3>
      <p className="news-article-description">{description}</p>
    </article>
  )
}

export default NewsArticle;