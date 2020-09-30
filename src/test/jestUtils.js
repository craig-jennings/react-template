import { fireEvent, getByText, render as rtlRender } from '@testing-library/react';
import { NotificationProvider } from '../contexts/NotificationContext';

function render(ui, { ...rtlOptions } = {}) {
  const Wrapper = ({ children }) => {
    return <NotificationProvider>{children}</NotificationProvider>;
  };

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }),
  };
}

function setSelectValue(select, value) {
  fireEvent.focus(select);
  fireEvent.keyDown(select, { key: 'ArrowDown', code: 40 });

  fireEvent.click(getByText(select, value));
}

export * from '@testing-library/react';
export { render, setSelectValue };
