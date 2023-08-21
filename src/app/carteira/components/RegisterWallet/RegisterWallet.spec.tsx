import { render, screen } from '@testing-library/react'

import RegisterWallet from "./index"

describe('RegisterWallet', () => {

  it('should be able to render correctly', async () => {
    render(<RegisterWallet setOpen={() => true}/>)
    const selectAccount = screen.getByPlaceholderText("Tipo da conta");
    expect(selectAccount).toBeInTheDocument()

    const selectBank = screen.getByPlaceholderText("Banco");
    expect(selectBank).toBeInTheDocument();

    const description = screen.getByPlaceholderText("Descrição");
    expect(description).toBeInTheDocument();

    const confirmButton = screen.getByRole('button', { name: 'Confirmar' })
    expect(confirmButton).toBeInTheDocument();

    const cancelButton = screen.getByRole('button', { name: 'Cancelar' })
    expect(cancelButton).toBeInTheDocument();
  })
})
