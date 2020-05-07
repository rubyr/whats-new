import React from "react";
import Menu from "./Menu";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("SearchForm", () => {
  it('should display all five categories', () => {
    const { getByText } = render(<Menu selected="local" />);
    expect(getByText("local")).toBeInTheDocument();
    expect(getByText("entertainment")).toBeInTheDocument();
    expect(getByText("technology")).toBeInTheDocument();
    expect(getByText("science")).toBeInTheDocument();
    expect(getByText("health")).toBeInTheDocument();
  });
  it('should call pickTopic function with the selected category', () => {
    const mockPickTopic = jest.fn();
    const { getByText } = render(<Menu selected="local" pickTopic={mockPickTopic} />);
    fireEvent.click(getByText('science'));
    expect(mockPickTopic).toHaveBeenCalledWith("science");
    fireEvent.click(getByText("health"));
    expect(mockPickTopic).toHaveBeenCalledWith("health");
  });
  it("should change which button has selected class on click", () => {
    let selected = "local";
    const mockPickTopic = (name) => { selected = name };
    const container = render(
      <Menu selected={selected} pickTopic={mockPickTopic} />
    );
    const getByText = container.getByText;
    expect(getByText("local")).toHaveClass("selected");
    fireEvent.click(getByText("science"));
    container.rerender(<Menu selected={selected} pickTopic={mockPickTopic} />);
    expect(getByText("science")).toHaveClass("selected");
    expect(getByText("local")).not.toHaveClass("selected");
  });
});
