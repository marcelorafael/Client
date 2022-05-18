import { Story, Meta } from '@storybook/react/types-6-0'
import HighLight, { HighLightProps } from '.'
import item from './mock'

export default {
  title: 'HighLight',
  component: HighLight,
  args: { ...item }
} as Meta

export const Default: Story<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <HighLight {...args} />
  </div>
)

export const WithFloatImage: Story<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <HighLight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
