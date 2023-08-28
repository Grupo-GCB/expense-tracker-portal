import { fireEvent, render, screen } from "@testing-library/react";

import { UpdateWallet } from ".";

describe("Update Wallet", () => {
  it("should be able to render correctly", () => {
    const setOpen = jest.fn();

    render(<UpdateWallet setOpen={setOpen} />);

    const accountTypeInput = screen.getByPlaceholderText("Tipo da conta");
    const bankInput = screen.getByPlaceholderText("Banco");
    const descriptionTextarea = screen.getByPlaceholderText("Descrição");
    const confirmButton = screen.getByRole("button", { name: "Confirmar" });
    const cancelButton = screen.getByRole("button", { name: "Cancelar" });

    expect(accountTypeInput).toBeInTheDocument();
    expect(bankInput).toBeInTheDocument();
    expect(descriptionTextarea).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("should be able to handle form submission", async () => {
    const mockSetOpen = jest.fn();
    render(<UpdateWallet setOpen={mockSetOpen} />);

    const accountTypeInput = screen.getByPlaceholderText("Tipo da conta");
    const bankInput = screen.getByPlaceholderText("Banco");
    const descriptionTextarea = screen.getByPlaceholderText("Descrição");
    const confirmButton = screen.getByText("Confirmar");

    fireEvent.change(accountTypeInput, { target: { value: "Tipo de Conta" } });
    fireEvent.change(bankInput, { target: { value: "Santander" } });
    fireEvent.change(descriptionTextarea, {
      target: { value: "Descrição do Wallet" },
    });

    fireEvent.click(confirmButton);

    await screen.findByTestId("loading-icon");

    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
