import React from "react";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// seems I have no need for react-hot-loader

import styles from "./styles.css";
import SplashScreen from "./components/splash-screen";

const App = () => (
  <React.Fragment>
    <SplashScreen duration={4000} />
    <AmplifyAuthenticator>
      <h1>Hello world 2</h1>
      <AmplifySignOut />
    </AmplifyAuthenticator>
  </React.Fragment>
);

export default App;
