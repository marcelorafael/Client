/* eslint-disable @typescript-eslint/no-explicit-any */
import GameCardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const items: any = [
  {
    id: '1',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215
  },
  {
    id: '2',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235,
    promotionalPrice: 215
  },
  {
    id: '3',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235,
    promotionalPrice: 215
  },
  {
    id: '4',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235,
    promotionalPrice: 215
  },
  {
    id: '5',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235,
    promotionalPrice: 215
  },
  {
    id: '6',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 235,
    promotionalPrice: 215
  }
]

describe('<GameCardSlider />', () => {
  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} />)
  })
})
