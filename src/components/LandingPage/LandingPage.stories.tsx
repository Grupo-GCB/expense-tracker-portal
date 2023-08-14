import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Meta, StoryObj } from '@storybook/react'
import { reactRouterOutlet, reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

import { LandingPage } from '@/components/LandingPage'

export default {
  title: 'Pages/Landing Page',
  component: LandingPage,
  decorators:[withRouter],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta

export const Mobile: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone5',
    },
    reactRouter: reactRouterParameters({
      routing: reactRouterOutlet(<LandingPage/>),
    }),
  },
}

export const Tablet: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
}

export const Laptop: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: 'laptop',
    },
  },
}

export const LaptopLarge: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: 'laptopLarge',
    },
  },
}
