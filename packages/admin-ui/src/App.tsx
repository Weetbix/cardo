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
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import { drawerWidth } from "./components/constants";

import "@aws-amplify/ui/dist/style.css";
Amplify.configure(awsconfig);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
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
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  Responsive drawers
                </Typography>
              </Toolbar>
            </AppBar>

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

export default withAuthenticator(App, true);
