import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RegisterTransaction } from ".";
import { useRegisterTransaction } from "./hook";

jest.mock("./hook");
const setOpen = jest.fn();
const mockUseRegisterTransaction =
  useRegisterTransaction as jest.MockedFunction<typeof useRegisterTransaction>;
const mockHandleNewTransaction = jest.fn();
mockUseRegisterTransaction.mockReturnValue({
  states: {
    walletsNames: [{ value: "wallet1", label: "Wallet 1" }],
    isSavingDataForms: false,
  },
  actions: {
    handleNewTransaction: mockHandleNewTransaction,
    getMaxDate: jest.fn(),
  },
});

describe("Register Transaction", () => {
  it("should be able render the modal", () => {
    const setOpen = jest.fn();

    render(<RegisterTransaction setOpen={setOpen} />);

    const descriptionInput = screen.getByPlaceholderText("Descrição");
    const valueInput = screen.getByPlaceholderText("Preço");
    const dateInput = screen.getByPlaceholderText("Data");
    const walletsSelect = screen.getByPlaceholderText("Carteiras");
    const categoriesSelect = screen.getByPlaceholderText("Categoria");
    const addButton = screen.getByRole("button", { name: "Cadastrar" });

    expect(descriptionInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(walletsSelect).toBeInTheDocument();
    expect(categoriesSelect).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("should be able to handle form submission", async () => {
    render(<RegisterTransaction setOpen={setOpen} />);

    const descriptionInput = screen.getByPlaceholderText("Descrição");
    const valueInput = screen.getByPlaceholderText("Preço");
    const dateInput = screen.getByPlaceholderText("Data");
    const walletsSelect = screen.getByPlaceholderText("Carteiras");
    const categoriesSelect = screen.getByPlaceholderText("Categoria");
    const addButton = screen.getByRole("button", { name: "Cadastrar" });

    userEvent.type(descriptionInput, "Sample description");
    userEvent.type(valueInput, "100");
    userEvent.type(dateInput, "2023-08-18");
    userEvent.selectOptions(walletsSelect, "Wallet 1");
    userEvent.selectOptions(categoriesSelect, "Category 1");

    fireEvent.click(addButton);

    await waitFor(() => expect(mockHandleNewTransaction).toHaveBeenCalled());
  });
});
