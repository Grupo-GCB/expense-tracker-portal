import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { LandingPage } from "@/components/LandingPage";

describe("Landing Page", () => {
  it("should be able to render correctly", () => {
    render(<LandingPage />);

    const logo = screen.getByRole("img", { name: "Logo do Grupo GCB" });
    expect(logo).toBeInTheDocument();

    const spanHeader = screen.getByText("Expensive Tracker");
    expect(spanHeader).toBeInTheDocument();

    const title = screen.getByText(
      "Trilhe o caminho da estabilidade financeira"
    );
    expect(title).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Experimentar!" });
    expect(button).toBeInTheDocument();

    const image = screen.getByRole("img", { name: "preview-of-home" });
    expect(image).toBeInTheDocument();
  });

  it("should be able to render button text correctly", () => {
    render(<LandingPage />);

    const buttonText = screen.getByTestId("login-page-button");

    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toHaveTextContent("Experimentar!");
  });

  it("should be able to redirect to login page when button is clicked", () => {
    render(<LandingPage />);

    const button = screen.getByTestId("login-page-button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
  });
});
