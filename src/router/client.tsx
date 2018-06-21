import * as React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Index from "../components/pages/Index";
import Users from "../components/pages/Users";

export const routes = [
  { exact: true, path: "/", component: Index },
  { exact: true, path: "/users", component: Users }
];

export default {
  createRoutes(store: any) {
    return (
      <Switch>
        {routes.map((route, index) => <Route {...route} key={index} />)}
      </Switch>
    );
  }
};
