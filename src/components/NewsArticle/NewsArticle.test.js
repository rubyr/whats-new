import React from 'react';
import NewsArticle from './NewsArticle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('NewsArticle', () => {
  let content = {
    headline: "javascript react test",
    img: "https://miro.medium.com/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    url: "https://www.google.com/",
    description: "this is a test for a react application that i am developing"
  };
  let container;
  let getByText;
  beforeEach(() => {
    container = render(<NewsArticle content={content} />);
    getByText = container.getByText;
  });
  it('displays the correct article information', () => {
    expect(getByText("javascript react test")).toBeInTheDocument();
    expect(getByText(/this is a test/)).toBeInTheDocument();
  });
  it('shows the image of the article', () => {
    expect(container.getByAltText("javascript react test")).toBeInTheDocument();
  });
});