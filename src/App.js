import React, { Fragment } from "react";

import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";
import Reset from "./styles/generic/reset";
import Base from "./styles/base";
import Size from "./styles/settings/size";

import Router from "./router";

const App = () => (
  <Fragment>
    <Colors />
    <Size />
    <Spacing />
    <Reset />
    <Base />
    <Router />
  </Fragment>
);

export default App;
