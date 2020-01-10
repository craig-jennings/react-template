import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, getByText, render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import reducer from '../reducers';

function render(
  ui,
  { preloadedState, store = configureStore({ reducer, preloadedState }), ...rtlOptions } = {},
) {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }),
    store,
  };
}

function setSelectValue(select, value) {
  fireEvent.focus(select);
  fireEvent.keyDown(select, { key: 'ArrowDown', code: 40 });

  fireEvent.click(getByText(select, value));
}

export * from '@testing-library/react';
export { render, setSelectValue };
