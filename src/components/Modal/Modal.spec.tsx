import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from '@/components/Modal'

describe('Modal', () => {
  it('should be able to render correctly', () => {
    render(<Modal>Test Modal</Modal>);
    const modalContent = screen.getByText('Test Modal');
    expect(modalContent).toBeInTheDocument();
  });

  it('should be able to open and close when trigger is clicked', () => {
    render(
      <Modal>
        <Modal.Button>Open Modal</Modal.Button>
        <Modal.Content>
          Modal Content
          <Modal.Close data-testid="close-modal" asChild><button>fechar</button></Modal.Close>
        </Modal.Content>
      </Modal>
    );

    const openButton = screen.getByText('Open Modal');
    fireEvent.click(openButton);

    const modalContent = screen.getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: 'fechar' })

    fireEvent.click(closeButton)

    expect(modalContent).not.toBeInTheDocument();
  });
});
