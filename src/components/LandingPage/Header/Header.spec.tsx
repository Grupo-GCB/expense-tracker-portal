import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("Header", () => {
  it("should be able to render correctly", () => {
    render(<Header />);

    const image = screen.getByAltText("logo gcb");
    expect(image).toBeInTheDocument();

    const span = screen.getByText("Expensive Tracker");
    expect(span).toBeInTheDocument();
  });
});
