import React, { FunctionComponent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { gql, useQuery } from "@apollo/client";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  List,
} from "@material-ui/core";
import { ListMessagesQuery } from "@cardo/backend/src/API";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const ApprovalsPage: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery<ListMessagesQuery>(gql`
    query List {
      listMessages {
        items {
          message
          id
          category {
            name
          }
        }
      }
    }
  `);

  if (loading) return <div>Loading</div>;
  if (error) return <div>`Error! ${error}`</div>;

  return (
    <div className={classes.demo}>
      <List>
        {data?.listMessages?.items.map((message) => {
          return (
            <ListItem key={message?.id} dense button>
              <ListItemIcon>
                <Checkbox edge="start" disableRipple color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={message?.message}
                secondary={message?.category.name}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ApprovalsPage;
