import { Meta, StoryObj } from '@storybook/react'
import { MenuOptions } from '.'
import { IMenuProps } from '@/interfaces'

const meta: Meta <IMenuProps> = {
    title: 'MenuSideBar/Components/MenuOptions',
    component: MenuOptions,
    argTypes: {
        open:{
            defaultValue: false,
            type: 'boolean'
        }
    },
    parameters: {
        layout: 'centered', 
        viewport: {
            defaultViewport: 'iphone5',
        },
    },
  };

export default meta

export const Default: StoryObj<IMenuProps> = {
    args:{
        open: false
    }
}


  