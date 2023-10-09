import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './index'

test('render button content', () => {
  render(<Button />)

  expect(screen.getByRole('button')).toHaveTextContent('jasper 讚讚')
})
