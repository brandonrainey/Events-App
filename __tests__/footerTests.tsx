/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Home from '../app/(root)/page' // Adjust the import path according to your project structure
import '@testing-library/jest-dom'
import Footer from '@/components/shared/Footer'

test('renders Footer component', () => {
  render(<Footer />) // Pass the mocked props
  const footElement = screen.getByText(/Japan Events/i) // Adjust this to match text in your Home component
  expect(footElement).toBeInTheDocument()
})
