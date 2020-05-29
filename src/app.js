import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

import styles from "./styles.css";
import SplashScreen from "./components/splash-screen";
import HomePage from './pages/home-page';

const App = () => (
  <React.Fragment>
    <SplashScreen duration={1000} />
    <AmplifyAuthenticator>
      <HomePage />
    </AmplifyAuthenticator>
  </React.Fragment>
);

export default App;
