import { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import Providers from 'components/Providers';
import userEvent from '@testing-library/user-event';

function render(ui: ReactElement, { ...rtlOptions } = {}) {
  const Wrapper = ({ children }: OnlyChildrenProps) => <Providers>{children}</Providers>;

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }),
  };
}

export * from '@testing-library/react';
export { render, userEvent };
