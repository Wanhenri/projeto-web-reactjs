import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../src/Components/Header";
import Home from "./pages/Home";
import Footer from "../src/Components/Footer";

export default function Router() {
  const routes = [
    {
      name: "home",
      exact: true,
      component: Home,
      path: "/"
    }
  ];
  return (
    // exemplo da rota sem o spread operator(...):
    // <Route key={route.name} name={route.name} path={route.path} exact={route.exact} component={route.component}></Route>
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route key={route.name} {...route}></Route>
        ))}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
