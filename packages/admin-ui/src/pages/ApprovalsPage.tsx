import React, { FunctionComponent } from "react";
import { gql, useQuery } from "@apollo/client";

const ApprovalsPage: FunctionComponent<{}> = () => {
  const { loading, error, data } = useQuery(gql`
    query List {
      listMessages {
        items {
          message
        }
      }
    }
  `);

  if (loading) return <div>Loading</div>;
  if (error) return <div>`Error! ${error}`</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default ApprovalsPage;
