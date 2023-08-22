import { fireEvent, render, screen } from "@testing-library/react";

import { RegisterWallet }  from "./index";

describe("Register Wallet", () => {
  it("should be able to render the component correctly", () => {
    const setOpen = jest.fn();

    render(<RegisterWallet setOpen={setOpen} />);

    const tipoContaInput = screen.getByPlaceholderText("Tipo da conta");
    const bancoInput = screen.getByPlaceholderText("Banco");
    const descricaoTextarea = screen.getByPlaceholderText("Descrição");
    const confirmButton = screen.getByRole("button", { name: "Confirmar" });
    const cancelButton = screen.getByRole("button", { name: "Cancelar" });

    expect(tipoContaInput).toBeInTheDocument();
    expect(bancoInput).toBeInTheDocument();
    expect(descricaoTextarea).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("should be able to handle form submission", async () => {
    const mockSetOpen = jest.fn();
    render(<RegisterWallet setOpen={mockSetOpen} />);

    const tipoContaInput = screen.getByPlaceholderText("Tipo da conta");
    const bancoInput = screen.getByPlaceholderText("Banco");
    const descricaoTextarea = screen.getByPlaceholderText("Descrição");
    const confirmButton = screen.getByText("Confirmar");

    fireEvent.change(tipoContaInput, { target: { value: "Tipo de Conta" } });
    fireEvent.change(bancoInput, { target: { value: "Santander" } });
    fireEvent.change(descricaoTextarea, {
      target: { value: "Descrição do Wallet" },
    });

    fireEvent.click(confirmButton);

    await screen.findByTestId("loading-icon");

    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
