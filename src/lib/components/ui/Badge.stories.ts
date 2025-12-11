import type { Meta, StoryObj } from '@storybook/svelte';
import type { BadgeProps } from '../../types';
import Badge from './Badge.svelte';

const meta: Meta<BadgeProps> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default' as any,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary' as any,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success' as any,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning' as any,
  },
};

export const ErrorVariant: Story = {
  args: {
    variant: 'error',
    children: 'Error' as any,
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info' as any,
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small' as any,
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium' as any,
  },
};
