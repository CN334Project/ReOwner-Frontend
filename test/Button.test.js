// Button.test.js
import React from 'react';
import "@testing-library/jest-dom"; 
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders button with correct text', () => {
    const { getByTestId } = render(<Button>Hello</Button>);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Hello');
  });

  test('calls onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickMock}>Click me</Button>);
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
