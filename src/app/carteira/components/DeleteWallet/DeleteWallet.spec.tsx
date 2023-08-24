import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { DeleteWallet } from ".";
import { useDeleteWallet } from "./hook";

jest.mock("./hook", () => ({
  useDeleteWallet: jest.fn(() => ({
    deleteActions: {
      handleDeleteWallet: jest.fn(),
    },
  })),
}));

describe("Delete Wallet", () => {
  it("should render the component correctly", () => {
    const setOpen = jest.fn();
    render(<DeleteWallet setOpen={setOpen} />);

    const deleteButton = screen.getByRole("button", { name: "Deletar" });
    const cancelButton = screen.getByRole("button", { name: "Cancelar" });

    expect(deleteButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("should call handleDeleteWallet when clicking the delete button", async () => {
    const mockSetOpen = jest.fn();
    const mockHandleDeleteWallet = jest.fn().mockResolvedValue("Carteira deletada com sucesso.");
    (useDeleteWallet as jest.Mock).mockReturnValue({ deleteActions: { handleDeleteWallet: mockHandleDeleteWallet } });

    render(<DeleteWallet setOpen={mockSetOpen} />);

    const deleteButton = screen.getByText("Deletar");

    fireEvent.click(deleteButton);

    await waitFor(() => expect(mockHandleDeleteWallet).toHaveBeenCalledTimes(1));
    expect(mockSetOpen).toHaveBeenCalledWith(false);
    expect(screen.queryByTestId("loading-icon")).not.toBeInTheDocument();
  });

  it("should display error message if delete fails", async () => {
    const mockSetOpen = jest.fn();
    const mockHandleDeleteWallet = jest.fn().mockRejectedValue("Error during delete");
    (useDeleteWallet as jest.Mock).mockReturnValue({ deleteActions: { handleDeleteWallet: mockHandleDeleteWallet } });

    render(<DeleteWallet setOpen={mockSetOpen} />);

    const deleteButton = screen.getByText("Deletar");

    fireEvent.click(deleteButton);

    await waitFor(() => expect(mockHandleDeleteWallet).toHaveBeenCalledTimes(1));
    expect(mockSetOpen).not.toHaveBeenCalledWith(false);
    expect(screen.queryByTestId("loading-icon")).not.toBeInTheDocument();
    expect(screen.getByText("Erro ao deletar a carteira.")).toBeInTheDocument();
  });
});
