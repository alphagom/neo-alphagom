import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('성능 테스트', () => {
  render(<App />);
  // // Act: try to find the expected link.
  // const linkElement = screen.getByText(/learn react/i);
  // // Assert: check that required link is indeed in the document.
  // expect(linkElement).toBeInTheDocument();
});
