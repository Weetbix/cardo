import React, { FunctionComponent } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import ExitIcon from "@material-ui/icons/ExitToApp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { drawerWidth } from "./constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

const Sidebar: FunctionComponent<{
  mobileOpen: boolean;
  onToggleDrawer: () => void;
}> = ({ mobileOpen, onToggleDrawer }) => {
  const classes = useStyles();
  const theme = useTheme();

  const drawer = [
    <div className={classes.toolbar} />,
    <Divider />,
    <List>
      <ListItem button>
        <ListItemIcon>
          <LibraryAdd />
        </ListItemIcon>
        <ListItemText primary="Approvals" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LibraryBooks />
        </ListItemIcon>
        <ListItemText primary="All Messages" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <ExitIcon />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItem>
    </List>,
  ];

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={onToggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
