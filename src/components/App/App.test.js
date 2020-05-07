import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

describe('App', () => {
  it('should load local articles first', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Classic-rock band The Who/)).toBeInTheDocument();
  });
  it('should update the articles based upon what category is selected', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("science"));
    expect(getByText(/Astronomers have discovered/)).toBeInTheDocument();
  });
  it('should be able to filter articles based upon an input', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.change(getByTestId("search-input"), {
      target: { value: "mural" },
    });
    fireEvent.click(getByText("Search"));
    expect(getByTestId("news-container").childElementCount).toBe(1);
  });
});