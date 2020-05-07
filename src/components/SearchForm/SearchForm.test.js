import React from "react";
import SearchForm from "./SearchForm";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("SearchForm", () => {
  it("should have a title", () => {
    const { getByText } = render(<SearchForm />);
    expect(getByText("What's")).toBeInTheDocument();
    expect(getByText("New")).toBeInTheDocument();
  });
  it("should take in and be able to search for a query", () => {
    const mockSearch = jest.fn();
    const { getByTestId, getByText } = render(<SearchForm search={mockSearch} />);
    fireEvent.change(getByTestId("search-input"), { target: {value: 'cool'} })
    fireEvent.click(getByText("Search"));
    expect(mockSearch).toBeCalledWith("cool");
  });
});
