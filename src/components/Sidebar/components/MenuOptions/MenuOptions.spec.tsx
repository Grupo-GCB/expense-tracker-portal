import React from "react";
import { render, screen } from "@testing-library/react";

import { MenuOptions } from ".";

describe("MenuOptions", () => {
  it("should be able to render the menu options with the correct icons and labels", () => {
    render(<MenuOptions open={true} />);

    const homeIcon = screen.getByTestId("homeIcon");
    const homeLabelText = screen.getByText("Home");

    const summaryIcon = screen.getByTestId("summaryIcon");
    const resumoLabelText = screen.getByText("Resumo");

    const walletsIcon = screen.getByTestId("walletsIcon");
    const carteirasLabelText = screen.getByText("Carteiras");

    expect(homeIcon).toBeInTheDocument();
    expect(homeLabelText).toBeInTheDocument();

    expect(summaryIcon).toBeInTheDocument();
    expect(resumoLabelText).toBeInTheDocument();

    expect(walletsIcon).toBeInTheDocument();
    expect(carteirasLabelText).toBeInTheDocument();
  });

  it("should be able to render the correct styles for icons when the open prop is true", () => {
    render(<MenuOptions open={true} />);

    const homeIcon = screen.getByTestId("homeIcon");
    const summaryIcon = screen.getByTestId("summaryIcon");
    const walletsIcon = screen.getByTestId("walletsIcon");

    expect(homeIcon).toHaveClass("w-8 h-8");
    expect(summaryIcon).toHaveClass("w-8 h-8");
    expect(walletsIcon).toHaveClass("w-8 h-8");
  });

  it("should be able to render the correct styles for icons when the open prop is false", () => {
    render(<MenuOptions open={false} />);

    const homeIcon = screen.getByTestId("homeIcon");
    const summaryIcon = screen.getByTestId("summaryIcon");
    const walletsIcon = screen.getByTestId("walletsIcon");

    expect(homeIcon).toHaveClass("w-8 h-8");
    expect(summaryIcon).toHaveClass("w-8 h-8");
    expect(walletsIcon).toHaveClass("w-8 h-8");
  });
});
