import React, { FunctionComponent } from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

import "@aws-amplify/ui/dist/style.css";
Amplify.configure(awsconfig);

const App: FunctionComponent<{}> = () => {
  return <div className="App">ok</div>;
};

export default withAuthenticator(App, true);
