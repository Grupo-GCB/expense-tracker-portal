import React from "react";
import { render, screen } from "@testing-library/react";
import { LandingPage } from ".";

describe("LandingPage", () => {
  it("should be able to render correctly", () => {
    render(<LandingPage />);
    const logo = screen.getByAltText("logo gcb");
    expect(logo).toBeInTheDocument();

    const spanHeader = screen.getByText("Expensive Tracker");
    expect(spanHeader).toBeInTheDocument();

    const title = screen.getByText(
      "Trilhe o caminho da estabilidade financeira"
    );
    expect(title).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const image = screen.getByAltText("home do site");
    expect(image).toBeInTheDocument();
  });

  it("should be able to render button text correctly", () => {
    render(<LandingPage />);
    const buttonText = screen.getByRole("button", { name: "Experimentar!" });
    expect(buttonText).toBeInTheDocument();
  });

  it("should be able to render button link with correct URL", () => {
    render(<LandingPage />);
    const linkButton = screen.getByRole("link", { name: "Experimentar!" });
    expect(linkButton).toHaveAttribute("href", "/api/auth/login");
  });
});
