import { render, screen } from '@test/jestUtils';
import Page404 from '../Page404';

describe('Notifications', () => {
  it('shows a notification', () => {
    render(<Page404 />);

    expect(screen.getByText('You lost?')).toBeDefined();
  });
});
