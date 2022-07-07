import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-perfect-scrollbar-z/build/styles.css"

import { Route, Switch } from "react-router-dom";
import { routerDatas } from "./routers";

import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        {routerDatas().map((item, index) => {
          let isDefault = Boolean(item.path);
          return (
            <Route
              key={index}
              exact={isDefault}
              path={isDefault ? item.path : undefined}
              component={item.component}
            />
          );
        })}
      </Switch>
    </Layout>
  );
};

export default App;
