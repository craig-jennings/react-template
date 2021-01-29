import { fireEvent, getByText, render as rtlRender } from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import Providers from '../components/Providers';

function render(ui: any, { ...rtlOptions } = {}) {
  const Wrapper = ({ children }: { children?: React.ReactNode }) => (
    <Providers>{children}</Providers>
  );

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }),
  };
}

function setSelectValue(select: HTMLSelectElement, value: string) {
  fireEvent.focus(select);
  fireEvent.keyDown(select, { key: 'ArrowDown', code: 40 });

  fireEvent.click(getByText(select, value));
}

export * from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
export { render, setSelectValue };
