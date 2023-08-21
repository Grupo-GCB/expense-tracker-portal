import React from 'react';
import { Meta } from '@storybook/react';

import { Modal } from '.'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

export const OpenModal = () => (
  <Modal open={true} >
    <Modal.Content>
      <h2 className="text-xl mb-4">Modal exemplo</h2>
      <p>Qualquer conteudo aqui dentro do modal</p>
    </Modal.Content>
  </Modal>
);
