import {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps} from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args:{
        children: 'Lorem ipsum.',
        size: 'md',
    },
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta

export const Default: StoryObj<ButtonProps> = {}
