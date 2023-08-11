import { Meta, StoryObj } from '@storybook/react'

import { UserProfile } from '.'
import { IUserProfileProps } from '@/interfaces'
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';

const {user} = useUser()

const meta: Meta <IUserProfileProps> = {
    title: 'MenuSideBar/Components/UserProfile',
    component: UserProfile,
    argTypes: {
        open:{
            defaultValue: false,
            type: 'boolean'
        },
        user: {
            defaultValue: {
                picture: 'https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png',
                name: 'John Doe'
            }
        }
    },
    parameters: {
        layout: 'centered', 
    },
  };

export default meta

export const Default: StoryObj<IUserProfileProps> = (args: any) => (
    <UserProvider>
        <UserProfile {...args}/>
    </UserProvider>
)

Default.args = {  
        open: false,
        user: {
            picture: 'https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png',
            name: 'John Doe'
        }
}