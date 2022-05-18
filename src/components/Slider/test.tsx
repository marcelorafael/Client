import '../../../.jest/match-media-mock'
import './match'
import { screen } from '@testing-library/react'

import Slider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Slider />', () => {
  it('should render children as  Slide item', () => {
    const { container } = renderWithTheme(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item 1</p>
        <p>item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
