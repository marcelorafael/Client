import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/200x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ = 200,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
