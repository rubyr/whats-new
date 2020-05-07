import React from "react";
import NewsContainer from "./NewsContainer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("NewsContainer", () => {
  let articles = [
    {
      id: 0,
      headline: "javascript react test",
      img: "https://miro.medium.com/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      url: "https://www.google.com/",
      description:
        "this is a test for a react application that i am developing",
    },
    {
      id: 1,
      headline: "also penguins are cool",
      img:
        "https://commons.wikimedia.org/wiki/File:South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_(Pygoscelis_antarctica)_04.jpg#/media/File:South_Shetland-2016-Deception_Island–Chinstrap_penguin_(Pygoscelis_antarctica)_04.jpg",
      url: "https://www.google.com/",
      description: "dude look at em they're just lil dudes walkin",
    },
  ];
  it('should hold many articles', () => {
    const container = render(<NewsContainer articles={articles} filter="" />);
    expect(container.getByTestId("news-container").childElementCount).toBe(2);
  });
  it('should be able to filter articles', () => {
    const container = render(<NewsContainer articles={articles} filter="penguins" />);
    expect(container.getByTestId("news-container").childElementCount).toBe(1);
  });
});
