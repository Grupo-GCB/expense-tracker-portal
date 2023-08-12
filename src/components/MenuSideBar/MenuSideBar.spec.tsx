import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useUser } from '@auth0/nextjs-auth0/client';
import nookies from 'nookies';

import { MenuSideBar } from '.';


jest.mock('@auth0/nextjs-auth0/client');
jest.mock('nookies');

const mockUseUser = useUser as jest.Mock;

const mockUserData = {
    name: 'John Doe',
    picture: 'https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png'
  };

describe('MenuSideBar', () => {
    beforeEach(() => {
        mockUseUser.mockReturnValue({ user: mockUserData });
      });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should be able to toggle sidebar when List icon is clicked', () => {
      render(<MenuSideBar />);
      const menuHamburguer = screen.getByTestId('menuHamburguer');
  
      fireEvent.click(menuHamburguer);
  
      expect(screen.getByTestId('menuNav')).toHaveClass('sm:w-full');
    });

    it('should be able to close sidebar when X icon is clicked', () => {
        render(<MenuSideBar />);
        const menuHamburguer = screen.getByTestId('menuHamburguer');
        const closeX = screen.getByTestId('closeX');
    
        fireEvent.click(menuHamburguer);
        fireEvent.click(closeX);
    
        expect(screen.getByTestId('menuNav')).toHaveClass('sm:-left-full');
    });
    
      
  });
