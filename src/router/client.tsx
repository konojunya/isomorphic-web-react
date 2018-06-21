import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { trigger } from "redial";

// components
import Index from "../components/pages/Index";
import Users from "../components/pages/Users";

export const routes = [
  { exact: true, path: "/", component: Index },
  { exact: true, path: "/users", component: Users }
];

export default {
  server: (store: any) => {
    return (
      <Switch>
        {routes.map((route, index) => <Route key={index} {...route} />)}
      </Switch>
    )
  },
  client: (store: any) => {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={(props:any) => {
              console.log((window as any).__STATE__)
              const Comp = route.component;
              if((window as any).__STATE__){
                delete (window as any).__STATE__;
              } else {
                trigger("fetch", Comp, {
                  dispatch: store.dispatch,
                  params: props.match.params
                })
              }
              return <Comp />
            }}
          />
        ))}
      </Switch>
    );
  }
};
