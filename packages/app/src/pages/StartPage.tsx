import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Connect } from "aws-amplify-react-native";
import { graphqlOperation } from "aws-amplify";
import * as queries from "@cardo/backend/src/graphql/queries";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Connect query={graphqlOperation(queries.listCategorys)}>
        {({ data, loading, errors }) => {
          if (errors) return <Text>Error</Text>;
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
