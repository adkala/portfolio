import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Technology from "../pages/Technology";

const Art = React.lazy(() => import("../pages/Art"));

const Router: React.FC = () => (
  <Suspense fallback={<div>LOADING</div>}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/art" />
        </Route>

        <Route path="/art">
          <Art />
        </Route>

        <Route path="/tech">
            <Technology />
        </Route>
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Router;
