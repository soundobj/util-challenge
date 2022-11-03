import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a util logo', () => {
    render(<Home />)

    const heading = screen.getByAltText('util')

    expect(heading).toBeInTheDocument()
  })
})
