import { render, screen } from 'test/utils';
import Page404 from './Page404';

it('shows the 404 page', () => {
  render(<Page404 />);

  expect(screen.getByText('You lost?')).toBeInTheDocument();
});
