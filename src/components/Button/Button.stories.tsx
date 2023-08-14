import { Meta, StoryObj } from '@storybook/react'
import { CircleNotch } from 'phosphor-react'

import { Button, IButtonProps } from '@/components/Button'

const meta: Meta<IButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters:{
    nextRouter: {
      path: '/',
      asPath: '/',
      query: {},
      push() {},
    },
  },
  argTypes: {
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    children: {
      type: 'string',
    },
  },
}

export default meta

export const Default: StoryObj<IButtonProps> = {
  args: {
    className: 'py-3 px-5',
    children: 'Experimentar!',
  },
}

export const Small: StoryObj<IButtonProps> = {
  args: {
    className: 'py-2 px-4 text-sm',
    children: 'Experimentar!',
  },
}

export const Medium: StoryObj<IButtonProps> = {
  args: {
    className: 'py-3 px-5',
    children: 'Experimentar!',
  },
}

export const Large: StoryObj<IButtonProps> = {
  args: {
    className: 'py-4 px-8 text-xl',
    children: 'Experimentar!',
  },
}

export const Loading: StoryObj<IButtonProps> = {
  args: {
    className: 'py-3 px-5 w-48',
    children: <CircleNotch className="animate-spin w-full justify-center" />,
  },
}

export const Canceled: StoryObj<IButtonProps> = {
  args: {
    className: 'py-4 px-8 text-xl',
    children: 'Experimentar!',
    canceled: true
  },
}
