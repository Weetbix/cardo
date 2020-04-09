import React, { FunctionComponent, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import API from "@aws-amplify/api";
import * as mutations from "@cardo/backend/src/graphql/mutations";
import { NavStackParamList } from "../types";
import Button from "../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontSize: 25,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#C6C6C6",
    borderRadius: 10,
    flex: 1,
    width: "100%",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "sans-serif-light",
  },
});

type Props = {
  route: RouteProp<NavStackParamList, "suggestion">;
  navigation: StackNavigationProp<NavStackParamList, "suggestion">;
};

const SuggestionPage: FunctionComponent<Props> = ({ route, navigation }) => {
  const {
    params: { category },
  } = route;

  const [suggestion, setSuggestion] = useState("");

  const onSubmitSuggestion = async () => {
    try {
      await API.graphql({
        query: mutations.submitMessage,
        variables: {
          message: suggestion,
          messageCategoryId: category.id,
        },
      });

      setSuggestion("");
      navigation.navigate("suggestionsuccess", { category });
    } catch (error) {
      navigation.navigate("error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your suggestion</Text>
      <TextInput
        style={styles.textInput}
        value={suggestion}
        onChangeText={(text) => setSuggestion(text)}
        multiline={true}
        editable
      />
      <Button
        onPress={onSubmitSuggestion}
        style={{ marginTop: 25, marginBottom: 5 }}
      >
        Submit
      </Button>
    </View>
  );
};

export default SuggestionPage;
