import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    // Verificando se estes elementos estão no documento.
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // Selecionando o Menu pela sua fumção.
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // Selecionando um atributo do elemento(aria-hidden) e verificando seu valor
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')

    // Verificando um estilo do menu
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // Simulando o click no menu para este abrir-se
    fireEvent.click(screen.getByLabelText(/open menu/i))

    // Mudando valores para que o menu seja aberto.
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // Simulando o click no menu para este fehcar-se
    fireEvent.click(screen.getByLabelText(/close menu/i))

    // Mudando valores para que o menu seja fechado.
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/Log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Marcelo" />)

    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/my account/i)).toBeInTheDocument()

    expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument()
  })
})
