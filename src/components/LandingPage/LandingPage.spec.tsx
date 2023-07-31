import React from "react";
import { render, screen } from "@testing-library/react";

import { LandingPage } from "./";

describe("Landing Page", () => {
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

    const image = screen.getByRole("img", { name: "preview-of-home" });
    expect(image).toBeInTheDocument();
  });

  it("should be able to render button text correctly", () => {
    render(<LandingPage />);

    const buttonText = screen.getByTestId("main-button");
    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toHaveTextContent("Experimentar!");
  });

  it("should be able to render button link with correct URL", () => {
    render(<LandingPage />);

    const linkButton = screen.getByRole("link", { name: "Experimentar!" });
    expect(linkButton).toHaveAttribute("href", "/api/auth/login");
  });
});
