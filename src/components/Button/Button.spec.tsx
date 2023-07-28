import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { Button } from ".";

describe("Button", () => {
  it("should be able to render the children correctly", () => {
    const buttonText = "Clique aqui";

    render(<Button>{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });

  afterEach(cleanup);

  it("should be able to call onClick function when the button is clicked", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Clique aqui</Button>);

    const button = screen.getByRole("button", { name: "Clique aqui" });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
