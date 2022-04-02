import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population zero',
  developer: 'Rockstar Games',
  image: 'https://source.unsplash.com/user/willianjusten/200x140',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ = 200,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    // verificar se o title foi renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderizar o component
    // preço sem line-through
    // preço tenha o background  secundário
  })

  it('should render a line-through in price when promotional', () => {
    // renderizar o component (com promotional) //
    // preço tenha line-through
    // preço promotional sem line-through
  })
})
