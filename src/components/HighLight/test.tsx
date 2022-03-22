import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HighLight from '.'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rd2',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<HighLight />', () => {
  it('should render headings and buttons', () => {
    renderWithTheme(<HighLight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<HighLight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<HighLight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <HighLight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })

  // it('should render background image', () => {
  //   renderWithTheme(<HighLight {...props} floatImage="/float-image.png" />)

  //   expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
  //     'src',
  //     '/float-image.png'
  //   )
  // })
})
