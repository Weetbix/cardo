import React, { FunctionComponent } from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ApprovalsPage from "./pages/ApprovalsPage";

import "@aws-amplify/ui/dist/style.css";
Amplify.configure(awsconfig);

const App: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/approvals" />
        </Route>
        <Route exact path="/approvals" render={() => <ApprovalsPage />} />
      </Switch>
    </Router>
  );
};

export default withAuthenticator(App, true);
