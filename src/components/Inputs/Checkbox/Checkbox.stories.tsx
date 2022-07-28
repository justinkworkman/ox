import React from 'react';
import {Story, Meta} from '@storybook/react';
import Checkbox from './Checkbox';
import { CheckBoxProps } from './CheckBox.types';

export default {
    title: 'Ox/Checkbox',
    component: Checkbox,
    argTypes: {},
} as Meta<typeof Checkbox>;

const Template: Story<CheckBoxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    checked: true,
    error: false,
    disabled: false,
    label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    checked: false,
    error: false,
    disabled: false,
    label: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
    error: false,
    success: true,
    disabled: false,
    label: 'Success'
}

export const Error = Template.bind({});
Error.args = {
    error: true,
    disabled: false,
    message: "Error"
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: 'Disabled'
}