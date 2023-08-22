import { render, screen, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";

import { getAllWallets } from "@/app/carteira/action";
import Carteira from "@/app/carteira/page";
import { CardWallet } from ".";

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
  },
}));

jest.mock("@/app/carteira/action", () => ({
  getAllWallets: jest.fn(),
}));

describe("CardWallet", () => {
  it("should be able to render correctly", () => {
    render(
      <CardWallet
        walletId="896adb01-efe8-4730-a9e4-b95720beaced"
        bankName="C6"
        accountType="Conta-Corrente"
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

  it("should be display error toast when there is an error to get wallets", async () => {
    getAllWallets.mockRejectedValue(new Error("API error"));

    render(<Carteira />);

    await waitFor(() => {
      expect(getAllWallets).toHaveBeenCalledTimes(1);
      expect(toast.error).toHaveBeenCalledWith("Erro ao listar as carteiras.");
    });
  });
});
