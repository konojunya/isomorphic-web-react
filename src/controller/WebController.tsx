import { Router } from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { trigger } from "redial";
import isMatch from "../lib/URLMatch";

import Html from "../layouts/desktop";
import route, { routes } from "../router/client";
import configureStore from "../store";

import { sagas } from "../store";

const serverRoutes = [
  ...routes.map(r => r.path)
];

const RootController = Router();

RootController.get(serverRoutes, (req, res) => {

  const store = configureStore()
  const context = {}
  const Routes = route.createRoutes(store);

  const locals = {
    params: req.params,
    dispatch: store.dispatch
  };

  const responseHTML = () => {
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {Routes}
        </StaticRouter>
      </Provider>
    );
    const initialState = store.getState();
    res.send(
      renderToString(
        <Html markup={markup} state={initialState} />
      )
    );
  };

  let comp;
  for (const r of routes) {
    if (isMatch(r.path, req.url)) {
      comp = r.component;
    }
  }

  store
    .runSaga(sagas)
    .done.then(responseHTML)
    .catch(responseHTML);

  trigger("fetch", comp, locals)
    .then(() => {
      store.close();
    })
    .catch((err: Error) => {
      res.status(500).send(err);
    });

})

export default RootController