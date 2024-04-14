import React, { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "../store/store";

type Options = {
  initialState?: RootState;
  store?: EnhancedStore;
} & RenderOptions;

export function renderWithProviders(
  ui: ReactElement,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  }: Options = {},
): RenderResult & { store: EnhancedStore } {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }), store };
}

export * from "@testing-library/react";
export { renderWithProviders as render };
