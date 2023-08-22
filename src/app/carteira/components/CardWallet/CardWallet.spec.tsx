import { render, screen } from "@testing-library/react";

import { CardWallet } from ".";

describe("CardWallet", () => {
  it("should be able to render correctly", () => {
    render(
      <CardWallet
        idWallet="896adb01-efe8-4730-a9e4-b95720beaced"
        nameBank="C6"
        typeAccount="Conta-Corrente"
        description="Carteira para viagens"
      />
    );
    const bankTitleTest = screen.getByText("C6");
    expect(bankTitleTest).toBeInTheDocument();

    const balance = screen.getByText("R$00,00");
    expect(balance).toBeInTheDocument();

    const typeAccount = screen.getByText("Conta-Corrente");
    expect(typeAccount).toBeInTheDocument();

    const description = screen.getByText("Carteira para viagens");
    expect(description).toBeInTheDocument();

    const confirmButton = screen.getByRole("button", { name: "Editar" });
    expect(confirmButton).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: "Excluir" });
    expect(cancelButton).toBeInTheDocument();
  });
});
