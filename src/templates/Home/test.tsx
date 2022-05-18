import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/HighLight/mock'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighligth: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighligth: highlightMock
}

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(
      <Home
        mostPopularHighLight={{
          title: '',
          subtitle: '',
          buttonLabel: '',
          buttonLink: '',
          backgroundImage: '',
          floatImage: undefined,
          alignment: undefined
        }}
        upcommingHighLight={{
          title: '',
          subtitle: '',
          buttonLabel: '',
          buttonLink: '',
          backgroundImage: '',
          floatImage: undefined,
          alignment: undefined
        }}
        freeHighLight={{
          title: '',
          subtitle: '',
          buttonLabel: '',
          buttonLink: '',
          backgroundImage: '',
          floatImage: undefined,
          alignment: undefined
        }}
        {...props}
      />
    )

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    // expect(
    //   screen.getByRole('heading', { name: /contact us/i })
    // ).toBeInTheDocument()
  })

  it('should render the section', () => {
    renderWithTheme(
      <Home
        mostPopularHighLight={{
          title: '',
          subtitle: '',
          buttonLabel: '',
          buttonLink: '',
          backgroundImage: '',
          floatImage: undefined,
          alignment: undefined
        }}
        upcommingHighLight={{
          title: '',
          subtitle: '',
          buttonLabel: '',
          buttonLink: '',
          backgroundImage: '',
          floatImage: undefined,
          alignment: undefined
        }}
        freeHighLight={{
          title: '',
          subtitle: '',
          buttonLabel: '',
          buttonLink: '',
          backgroundImage: '',
          floatImage: undefined,
          alignment: undefined
        }}
        {...props}
      />
    )

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })
})
