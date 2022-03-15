import { render, screen } from '@testing-library/react'

import HighLight from '.'

describe('<HighLight />', () => {
  it('should render the heading', () => {
    const { container } = render(<HighLight />)

    expect(
      screen.getByRole('heading', { name: /HighLight/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
