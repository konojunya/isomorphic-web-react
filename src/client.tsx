import * as React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import route from "./router/client";
import configureStore from "./store";
import { sagas } from "./store";

const supportsHistory = "pushState" in window.history;

const __STATE__ = (window as any).__STATE__;

const store = configureStore(__STATE__) as any;
const Routes = route.client(store);

store.runSaga(sagas);

hydrate(
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>{Routes}</BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
