import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz question' , () => {
  render(<App />);
  const questionElement =
screen.getByText(/what is the capital of india?/i);

expect(questionElement).toBeInTheDocument();
});
