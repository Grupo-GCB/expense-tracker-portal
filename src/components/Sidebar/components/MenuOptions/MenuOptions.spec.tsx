import React from "react";
import { render, screen } from "@testing-library/react";

import { MenuOptions } from ".";

describe("MenuOptions", () => {
  it("it should be able to render the menu options with correct icons and labels", () => {
    render(<MenuOptions open={true} />);

    const homeIcon = screen.getByTestId("homeIcon");
    const homeLabel = screen.getByText("Home");

    const resumoIcon = screen.getByTestId("resumoIcon");
    const resumoLabel = screen.getByText("Resumo");

    const carteirasIcon = screen.getByTestId("carteirasIcon");
    const carteirasLabel = screen.getByText("Carteiras");

    expect(homeIcon).toBeInTheDocument();
    expect(homeLabel).toBeInTheDocument();

    expect(resumoIcon).toBeInTheDocument();
    expect(resumoLabel).toBeInTheDocument();

    expect(carteirasIcon).toBeInTheDocument();
    expect(carteirasLabel).toBeInTheDocument();
  });

  it("should be able to render correct style in icons when open prop is true", () => {
    render(<MenuOptions open={true} />);

    const homeIcon = screen.getByTestId("homeIcon");
    const resumoIcon = screen.getByTestId("resumoIcon");
    const carteirasIcon = screen.getByTestId("carteirasIcon");

    expect(homeIcon).toHaveClass("w-8 h-8");
    expect(resumoIcon).toHaveClass("w-8 h-8");
    expect(carteirasIcon).toHaveClass("w-8 h-8");
  });

  it("should be able to render correct style in icons when open prop is false", () => {
    render(<MenuOptions open={false} />);

    const homeIcon = screen.getByTestId("homeIcon");
    const resumoIcon = screen.getByTestId("resumoIcon");
    const carteirasIcon = screen.getByTestId("carteirasIcon");

    expect(homeIcon).toHaveClass("w-8 h-8");
    expect(resumoIcon).toHaveClass("w-8 h-8");
    expect(carteirasIcon).toHaveClass("w-8 h-8");
  });
});
