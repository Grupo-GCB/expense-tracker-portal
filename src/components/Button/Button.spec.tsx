import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "@/components/Button";

describe("Button", () => {
  const buttonText = "Click here";

  it("should be able to render the children correctly", () => {
    render(<Button testId="test-button">{buttonText}</Button>);

    const button = screen.getByTestId("test-button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click here");
  });

  it("should be able to click the button", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>{buttonText}</Button>);

    const button = screen.getByRole("button", { name: "Click here" });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
