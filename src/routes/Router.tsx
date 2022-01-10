import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ArtEntries from "../components/art/ArtEntries";
import ArtEntry from "../components/art/ArtEntry";

const Tech = React.lazy(() => import("../pages/Tech"))
const Art = React.lazy(() => import("../pages/Art"));

const Router: React.FC = () => (
  <Suspense fallback={<div>LOADING</div>}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/art" />
        </Route>

        {ArtEntries.map(val => 
          <Route exact path={`/art/${val.subpage}`}>
            <ArtEntry {...val}/>
          </Route>
        )}

        <Route path="/art">
          <Art />
        </Route>

        <Route path="/tech">
          <Tech />
        </Route>
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Router;
