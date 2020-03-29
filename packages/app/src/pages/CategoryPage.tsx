import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Connect } from "aws-amplify-react-native";
import API, { graphqlOperation } from "@aws-amplify/api";
import * as queries from "@cardo/backend/src/graphql/queries";
import { ListCategorysQuery } from "@cardo/backend/src/API";
import CategoryCard from "../components/CategoryCard";
// import { Route } from "react-na"
import { RouteProp } from "@react-navigation/native";

import amplifyConfig from "../../aws-exports.js";
API.configure(amplifyConfig);

type Props = {
  route: RouteProp<NavStackParamList, "category">;
};

const CategoryPage: FunctionComponent<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>category page!</Text>
      <Text>{route.params.id}</Text>
      {/* <Connect query={graphqlOperation(queries.listCategorys)}>
        {({
          data: { listCategorys },
          loading,
          errors
        }: {
          data: ListCategorysQuery;
          loading: boolean;
          errors: Array<Error>;
        }) => {
          if (errors && errors.length)
            return <Text>d {JSON.stringify(errors)}</Text>;
          if (loading) return <Text>Loading...</Text>;

          if (listCategorys && listCategorys.items) {
            return listCategorys.items?.map(category => {
              return category ? (
                <CategoryCard key={category.id} name={category.name} />
              ) : null;
            });
          }
        }}
      </Connect> */}
    </View>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
