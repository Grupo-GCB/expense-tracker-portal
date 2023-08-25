import { fireEvent, render, screen } from "@testing-library/react";

import Header from ".";

describe("Header Component", () => {
  it("should be able to render", () => {
    render(<Header />);
    
    const newTransactionButton = screen.getByTestId("newTransactionButton");
    
    expect(newTransactionButton).toBeInTheDocument();
  });

  it("should be able to open the modal on button click", () => {
    render(<Header />);

    const newTransactionButton = screen.getByTestId("newTransactionButton");

    fireEvent.click(newTransactionButton);

    const modalTitle = screen.getByText("Nova transação");

    expect(modalTitle).toBeInTheDocument();
  });
});
