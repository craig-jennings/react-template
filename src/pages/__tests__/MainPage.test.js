import { cleanup, render } from '@testing-library/react';
import MainPage from '../MainPage';

describe('MainPage', () => {
  afterEach(cleanup);

  test('Should show the main page', () => {
    const { container } = render(<MainPage />);

    expect(container.firstChild.textContent).toEqual('Howdy React Template');
  });
});
