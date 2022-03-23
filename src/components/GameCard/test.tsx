import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

describe('<GameCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <GameCard
        title="won games"
        developer="willian justen"
        image="https://source.unsplash.com/user/willianjusten/200x140"
        price="R$ 235,00"
      />
    )

    // verificar se o title foi renderizado
    expect(screen.getByText(/won games/i)).toBeInTheDocument()
    // verificar se o developer foi renderizado
    expect(screen.getByText(/willian justen/i)).toBeInTheDocument()
    // verificar se  o image foi renderizado
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    // verificar se price foi renderizado
    expect(screen.getByText(/235,00/i)).toBeInTheDocument()
  })
})
