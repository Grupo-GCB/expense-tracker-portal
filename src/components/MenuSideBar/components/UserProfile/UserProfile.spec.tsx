import React from 'react';
import { render, screen } from '@testing-library/react';
import { useUser } from '@auth0/nextjs-auth0/client';

import {UserProfile} from '.';

jest.mock('@auth0/nextjs-auth0/client');
const mockUseUser = useUser as jest.Mock;

const mockUser = {
  user: {
    picture: 'https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png',
    name: 'John Doe',
  },
};

describe('UserProfile', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be able to render user profile with picture and name', () => {
    mockUseUser.mockReturnValue(mockUser);

    render(<UserProfile open={true} />);

    const userPicture = screen.getByAltText('Imagem do usuário.');
    const userName = screen.getByText('John Doe');

    expect(userPicture).toBeInTheDocument();
    expect(userPicture).toHaveAttribute('alt', 'Imagem do usuário.');
    expect(userName).toBeInTheDocument();
  });
});
