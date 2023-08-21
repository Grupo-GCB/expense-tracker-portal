import { render, screen } from '@testing-library/react'

import { CardWallet } from '.'

describe('CardWallet', () => {
  it("should be able to render correctly",() =>{
    render(<CardWallet idWallet="12" nameBank="NuTeste" typeAccount="Teste" description="Teste Unitário"/>)
    const bankTitleTest = screen.getByText("NuTeste")
    expect(bankTitleTest).toBeInTheDocument()

    const balance = screen.getByText("R$00,00")
    expect(balance).toBeInTheDocument()

    const typeAccount = screen.getByText("Teste")
    expect(typeAccount).toBeInTheDocument()

    const description = screen.getByText("Teste Unitário")
    expect(description).toBeInTheDocument()

    const confirmButton = screen.getByRole('button', { name: 'Editar' })
    expect(confirmButton).toBeInTheDocument();

    const cancelButton = screen.getByRole('button', { name: 'Excluir' })
    expect(cancelButton).toBeInTheDocument();

  })
})
