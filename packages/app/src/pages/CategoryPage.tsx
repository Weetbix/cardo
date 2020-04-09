import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Amplify from "aws-amplify";
import API, { graphqlOperation } from "@aws-amplify/api";
import { RouteProp } from "@react-navigation/native";
import { isFilled } from "ts-is-present";
import * as queries from "@cardo/backend/src/graphql/queries";
import { GetCategoryQuery } from "@cardo/backend/src/API";
import { NavStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import Button from "../components/Button";

import amplifyConfig from "../../aws-exports";
Amplify.configure(amplifyConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    paddingLeft: 45,
    paddingRight: 45,
  },
  message: {
    fontSize: 25,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    marginTop: 50,
    marginBottom: "auto",
  },
  image: {
    marginTop: 60,
    borderRadius: 100,
  },
  suggestion: {
    color: "#7DC6ED",
    fontFamily: "sans-serif-light",
    fontSize: 16,
    marginBottom: 5,
  },
});

type Props = {
  route: RouteProp<NavStackParamList, "category">;
  navigation: StackNavigationProp<NavStackParamList, "category">;
};

const CategoryPage: FunctionComponent<Props> = ({ route, navigation }) => {
  const {
    params: { category },
  } = route;

  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the message data and filter down
    async function fetchMessages() {
      const messageData: {
        data: GetCategoryQuery;
      } = await API.graphql(
        graphqlOperation(queries.getCategory, { id: category.id })
      );

      if (messageData.data.getCategory?.messages?.items?.length) {
        const fetchedMessages = messageData.data.getCategory.messages.items
          .filter(isFilled)
          .map((item) => item.message);

        setMessages(fetchedMessages);
      }
    }

    fetchMessages();
  }, []);

  const pickRandomMessage = () =>
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

  useEffect(() => {
    pickRandomMessage();
  }, [messages]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={category.image} />
      <Text style={styles.message}>{message}</Text>
      <Button onPress={pickRandomMessage} style={{ marginBottom: 25 }}>
        Next
      </Button>
      <Text
        style={styles.suggestion}
        onPress={() => navigation.navigate("suggestion", { category })}
      >
        Have a suggestion?
      </Text>
    </View>
  );
};

export default CategoryPage;
