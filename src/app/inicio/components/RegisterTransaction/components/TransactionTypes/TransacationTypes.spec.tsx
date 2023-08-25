import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TransactionTypes from ".";

describe("Transaction Type", () => {
  const mockHandleOptionSelect = jest.fn();

  it("should be able to render the component for Receita", () => {
    render(
      <TransactionTypes
        value="Receita"
        selectedOption="Receita"
        handleOptionSelect={mockHandleOptionSelect}
      />
    );

    const entradaButton = screen.getByRole("radio");

    expect(entradaButton).toBeInTheDocument();
    expect(entradaButton).toHaveClass("bg-green-500");
  });

  it("should be ablt to render the component for Saída", () => {
    render(
      <TransactionTypes
        value="Saída"
        selectedOption="Saída"
        handleOptionSelect={mockHandleOptionSelect}
      />
    );

    const saidaButton = screen.getByRole("radio");

    expect(saidaButton).toBeInTheDocument();
    expect(saidaButton).toHaveClass("bg-red-300");
  });

  it("should be able to call handleOptionSelect when clicked", () => {
    render(
      <TransactionTypes
        value="Receita"
        selectedOption="Receita"
        handleOptionSelect={mockHandleOptionSelect}
      />
    );

    const entradaButton = screen.getByRole("radio");
    userEvent.click(entradaButton);

    expect(mockHandleOptionSelect).toHaveBeenCalledWith("Receita");
  });
});
