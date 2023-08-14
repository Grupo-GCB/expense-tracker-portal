import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Wallet, RegisterWallet } from '@/app/Wallet'; 
import * as WalletActionsMock from '@/app/Wallet/actions.mock'; 

describe('Wallet Component', () => {
  it('shoulde be able to render correctly', () => {
    render(<Wallet />);
    const headerText = screen.getByText('Carteiras');
    expect(headerText).toBeInTheDocument();
  });

  it('should be able to open the modal when "cadastrar nova carteira" button is clicked', () => {
    render(<Wallet />);
    const registerButton = screen.getByText('cadastrar nova carteira', { exact: false });

    fireEvent.click(registerButton);

    const modalTitle = screen.getByText('Registrar Carteira');
    expect(modalTitle).toBeInTheDocument();
  });
});

describe('RegisterWallet Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shoulde be able to fetch and display bank options', async () => {
    WalletActionsMock.mockGetBanks.mockResolvedValue([
      { id: '1', name: 'Bank A' },
      { id: '2', name: 'Bank B' },
    ]);

    render(<RegisterWallet setOpen={() => {}} />);

    await waitFor(() => {
      const bankOptions = screen.getAllByRole('option');
      expect(bankOptions).toHaveLength(2);
      expect(bankOptions[0]).toHaveTextContent('Bank A');
      expect(bankOptions[1]).toHaveTextContent('Bank B');
    });
  });

  it('shoulde be able to save the form data and closes the modal', async () => {
    WalletActionsMock.mockHandleRegisterWallet.mockResolvedValue({ success: true });

    const mockSetOpen = jest.fn();
    render(<RegisterWallet setOpen={mockSetOpen} />);

    const confirmButton = screen.getByText('Confirmar!');
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(WalletActionsMock.mockHandleRegisterWallet).toHaveBeenCalled();
      expect(mockSetOpen).toHaveBeenCalled();
    });
  });
});
