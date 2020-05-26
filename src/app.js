import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// seems I have no need for react-hot-loader

import style from "./style.css";

const App = () => (
  <React.Fragment>
    <h1>Hello world 2</h1><AmplifySignOut />
  </React.Fragment>
);

export default withAuthenticator(App, {
  usernameAlias: "email",
});
