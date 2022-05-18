import { expect, test } from '@playwright/experimental-ct-react';
import Page404 from './Page404';

test('shows the 404 page', async ({ mount }) => {
  const component = await mount(<Page404 />);

  await expect(component).toContainText('You lost?');
});
