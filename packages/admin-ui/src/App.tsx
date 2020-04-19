import React, { FunctionComponent } from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import Auth from "@aws-amplify/auth";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { createAuthLink } from "aws-appsync-auth-link";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ApprovalsPage from "./pages/ApprovalsPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import AppBar from "./components/AppBar";

import "@aws-amplify/ui/dist/style.css";

Auth.configure(awsconfig);
Amplify.configure(awsconfig);

const config = {
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    // Our default type is AWS_IAM due to anonymous sign in for the app
    // so here we change it to registered cognito users
    type: "AMAZON_COGNITO_USER_POOLS",
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  disableOffline: true,
};

// There are issues using the current AWSAppSyncClient with newer
// version of ApolloLink, so we need to create our own client with
// links. See:
// - https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/450
// - https://github.com/wolfeidau/appsync-apollo-links
const link = ApolloLink.from([
  createAuthLink(config),
  createSubscriptionHandshakeLink(config),
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ addTypename: false }),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    appBarSpacer: theme.mixins.toolbar,
  })
);

const App: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Sidebar mobileOpen={mobileOpen} onToggleDrawer={handleDrawerToggle} />
        <Switch>
          <main className={classes.content}>
            <AppBar header="Approvals" onToggleDrawer={handleDrawerToggle} />
            <div className={classes.appBarSpacer} />
            <Route exact path="/">
              <Redirect to="/approvals" />
            </Route>
            <Route exact path="/approvals" render={() => <ApprovalsPage />} />
          </main>
        </Switch>
      </div>
    </Router>
  );
};

const withGraphQLProvider = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default withAuthenticator(withGraphQLProvider, false);
