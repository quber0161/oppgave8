import { fireEvent,render,screen } from '@testing-library/react'
import {Counter} from './Counter'

it('should show the text that on the screen', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('ShowText'))
  
    expect(document.querySelector('p')).toHaveTextContent('Karen is: 25 years old')
  
  });

it('should increase counter if increase button is pressed', () => {
  render(<Counter />)
  fireEvent.click(screen.getByText('ShowText'))

  expect(document.querySelector('p')).toHaveTextContent('Karen is: 25 years old')

  fireEvent.click(screen.getByText('getOlder'))

  expect(document.querySelector('p')).toHaveTextContent('Karen is: 26 years old')
});

it('should reset counter if reset button is pressed', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('ShowText'))
    expect(document.querySelector('p')).toHaveTextContent('Karen is: 25 years old')
 fireEvent.click(screen.getByText('reset'))
  expect(document.querySelector('p')).toHaveTextContent('Karen is: 25 years old')
  })


  it('should increase counter after reset button is pressed', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('ShowText'))
    expect(document.querySelector('p')).toHaveTextContent('Karen is: 25 years old')
    fireEvent.click(screen.getByText('getOlder'))
    fireEvent.click(screen.getByText('reset'))
    fireEvent.click(screen.getByText('getOlder'))
    expect(document.querySelector('p')).toHaveTextContent('Karen is: 26 years old')


  })

  it('should hide text after ', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('HideText'))
  
    expect(document.querySelector('p')).toBeNull()
  
  });





