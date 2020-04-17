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
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import AppBar from "./components/AppBar";

import "@aws-amplify/ui/dist/style.css";
Amplify.configure(awsconfig);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
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

export default withAuthenticator(App, false);
