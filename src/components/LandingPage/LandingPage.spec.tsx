import React from "react";
import { render, screen } from "@testing-library/react";
import { LandingPage } from ".";

describe("Header", () => {
  it("should be able to render correctly", () => {
    render(<LandingPage />);
    const logo = screen.getByAltText("logo gcb");
    expect(logo).toBeInTheDocument();

    const spanHeader = screen.getByText("Expensive Tracker");
    expect(spanHeader).toBeInTheDocument();

    const title = screen.getByText("Trilhe o caminho da estabilidade financeira")
    expect(title).toBeInTheDocument();

    const button = screen.getByRole('button',{ name: "Experimentar!" })
    expect(button).toBeInTheDocument();

    const image = screen.getByAltText("home do site");
    expect(image).toBeInTheDocument();


    
  });
});
