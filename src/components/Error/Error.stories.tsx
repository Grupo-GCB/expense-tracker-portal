import { StoryObj } from '@storybook/react'

import { Error } from '@/components/Error'
import { DEFAULT_UNKNOWN_ERROR_MESSAGE } from '@/utils/constants'

const meta = {
  title: 'Components/Error',
  component: Error,
  argTypes: {
    errorMessage: {
      control: 'text',
    },
  },
}

export default meta

export const Default: StoryObj = {
  args: {
    errorMessage: DEFAULT_UNKNOWN_ERROR_MESSAGE,
  },
}
