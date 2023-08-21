import { Meta, StoryObj } from '@storybook/react'

import { CustomSelect, ICustomSelectProps } from '.'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const meta: Meta<ICustomSelectProps> = {
  title: 'Components/CustomSelect',
  component: CustomSelect,
}

export default meta

export const Default: StoryObj<ICustomSelectProps> = {
  args:{
    options:options,
    placeholder:"Escolha algum dos exemplos"
  }
}

