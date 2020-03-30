import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Connect } from "aws-amplify-react-native";
import { graphqlOperation } from "@aws-amplify/api";
import * as queries from "@cardo/backend/src/graphql/queries";
import { GetCategoryQuery } from "@cardo/backend/src/API";
import { RouteProp } from "@react-navigation/native";
import { NavStackParamList } from "../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

type Props = {
  route: RouteProp<NavStackParamList, "category">;
};

const CategoryPage: FunctionComponent<Props> = ({ route }) => {
  const {
    params: { category }
  } = route;

  return (
    <View style={styles.container}>
      <Text>category page!</Text>
      <Text>{category.id}</Text>
      <Connect
        query={graphqlOperation(queries.getCategory, { id: category.id })}
      >
        {({
          data: { getCategory },
          loading,
          errors
        }: {
          data: GetCategoryQuery;
          loading: boolean;
          errors: Array<Error>;
        }) => {
          if (errors && errors.length)
            return <Text>d {JSON.stringify(errors)}</Text>;
          if (loading) return <Text>Loading...</Text>;

          if (
            getCategory &&
            getCategory.messages &&
            getCategory.messages.items
          ) {
            return getCategory.messages.items.map(message => (
              <Text key={message?.id}>{message?.message}</Text>
            ));
          }
        }}
      </Connect>
    </View>
  );
};

export default CategoryPage;
