import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

describe('Home Page', () => {
  test('renders GitHub link', () => {
    render(<Index />);
    const gitHubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute('href', 'https://github.com');
  });
});
