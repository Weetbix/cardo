import React, { FunctionComponent, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import API from "@aws-amplify/api";
import * as mutations from "@cardo/backend/src/graphql/mutations";
import { NavStackParamList } from "../types";

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
  button: {
    backgroundColor: "white",
    height: 50,
    width: 230,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 5,
    // android:
    elevation: 3,
    // iOS
    shadowColor: "rgba(0,0,0,0.16)",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  buttonText: {
    color: "#848484",
    fontSize: 20,
    fontFamily: "sans-serif-light",
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
      <TouchableOpacity style={styles.button} onPress={onSubmitSuggestion}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestionPage;
