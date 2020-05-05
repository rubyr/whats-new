import React from 'react';
import './NewsArticle.css';

const NewsArticle = props => {
  const {headline, img, url, description} = props.content;
  const open = () => window.open(url, "_blank");
  return (
    <article 
      className="news-article" 
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      tabIndex={0}
    >
      <img src={img} alt={headline} />
      <h3>{headline}</h3>
      <p className="news-article-description">{description}</p>
    </article>
  )
}

export default NewsArticle;