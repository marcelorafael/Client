import { Story, Meta } from '@storybook/react/types-6-0'
import HighLight, { HighLightProps } from '.'

export default {
  title: 'HighLight',
  component: HighLight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see Jhon’s now adventures',
    buttonLabel: 'Buy now',
    buttonLink: 'buttonLink: /games/rdr2',
    backgroundImage: '/img/red-dead-img.jpg'
  }
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
