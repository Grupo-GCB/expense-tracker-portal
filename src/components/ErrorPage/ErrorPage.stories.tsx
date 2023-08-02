import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { StoryObj } from '@storybook/react'

import { ErrorPage } from '@/components'
import { DEFAULT_UNKNOWN_ERROR_MESSAGE } from '@/utils/constants'

const meta = {
  title: 'Components/Error',
  component: ErrorPage,
  argTypes: {
    errorMessage: {
      control: 'text',
    },
    parameters: {
      layout: 'fullscreen',
      viewport: {
        viewports: INITIAL_VIEWPORTS,
      },
    },
  },
}

export default meta

export const Mobile: StoryObj = {
  args: {
    errorMessage: DEFAULT_UNKNOWN_ERROR_MESSAGE,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: StoryObj = {
  args: {
    errorMessage: DEFAULT_UNKNOWN_ERROR_MESSAGE,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Laptop: StoryObj = {
  args: {
    errorMessage: DEFAULT_UNKNOWN_ERROR_MESSAGE,
  },
  parameters: {
    viewport: {
      defaultViewport: 'laptop',
    },
  },
}

export const LaptopLarge: StoryObj = {
  args: {
    errorMessage: DEFAULT_UNKNOWN_ERROR_MESSAGE,
  },
  parameters: {
    viewport: {
      defaultViewport: 'laptopLarge',
    },
  },
}
