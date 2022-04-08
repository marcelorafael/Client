import { fireEvent, screen } from '@testing-library/react'
// import theme from 'styles/theme'
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
    renderWithTheme(<GameCard {...props} />)

    // preço sem line-through
    // const price = screen.getByText('R$ 235,00')
    // expect(price).not.toHaveStyle({
    //   textDecoration: 'line-through'
    // })

    // preço tenha o background  secundário
    // expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    // renderizar o component (com promotional) //
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    // preço tenha line-through
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // preço promotional sem line-through
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    // renderizar o component (com promotional) //
    renderWithTheme(<GameCard {...props} favorite />)

    // preço promotional sem line-through
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})

it('should render Ribbon', () => {
  renderWithTheme(
    <GameCard
      {...props}
      ribbon="My Ribbon"
      ribbonColor="secondary"
      ribbonSize="small"
    />
  )
  const ribbon = screen.getByText(/my ribbon/i)

  expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
  expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  expect(ribbon).toBeInTheDocument()
})
