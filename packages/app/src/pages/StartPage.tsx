import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Connect } from "aws-amplify-react-native";
import API, { graphqlOperation } from "@aws-amplify/api";
import * as queries from "@cardo/backend/src/graphql/queries";

import amplifyConfig from "../../aws-exports.js";
API.configure(amplifyConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Connect query={graphqlOperation(queries.listCategorys)}>
        {({ data, loading, errors }) => {
          if (errors && errors.length)
            return <Text>d {JSON.stringify(errors)}</Text>;
          if (loading) return <Text>Loading...</Text>;
          return <Text>{JSON.stringify({ data: data, cat: 4 })}</Text>;
        }}
      </Connect>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
