import { Meta, StoryObj } from '@storybook/react'
import {Envelope} from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps, TextInputIconProps } from "./TextInput";

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icons>
          <Envelope />
        </TextInput.Icons>
        <TextInput.Input placeholder="Type your e-mail adress"  />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithotIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-meil adress" />
  }
}
