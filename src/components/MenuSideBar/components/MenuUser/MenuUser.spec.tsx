import React from 'react';
import { render, screen } from '@testing-library/react';

import {MenuUser} from '.'

describe('MenuUser', () => {
  it('should be able to render menu user with correct icons when open prop is true', () => {
    render(<MenuUser open={true} />);

    const notificacoesIcon = screen.getByTestId('notificacoesIcon');
    const notificacoesLabel = screen.getByText('Notificações');

    expect(notificacoesIcon).toBeInTheDocument();
    expect(notificacoesLabel).toBeInTheDocument();

    const configuracoesIcon = screen.getByTestId('configuracoesIcon');
    const configuracoesLabel = screen.getByText('Configurações');

    expect(configuracoesIcon).toBeInTheDocument();
    expect(configuracoesLabel).toBeInTheDocument();
  });
});
