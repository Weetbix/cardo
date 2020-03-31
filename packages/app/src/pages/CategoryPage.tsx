import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";
import API, { graphqlOperation } from "@aws-amplify/api";
import { isFilled } from "ts-is-present";
import * as queries from "@cardo/backend/src/graphql/queries";
import { GetCategoryQuery } from "@cardo/backend/src/API";
import { NavStackParamList } from "../types";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    paddingLeft: 45,
    paddingRight: 45
  },
  message: {
    fontSize: 25,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    marginTop: 50,
    marginBottom: "auto"
  },
  image: {
    marginTop: 60,
    borderRadius: 100
  },
  suggestion: {
    color: "#7DC6ED",
    fontFamily: "sans-serif-light",
    fontSize: 16,
    marginBottom: 5
  },
  button: {
    backgroundColor: "white",
    height: 50,
    width: 230,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 25,
    // android:
    elevation: 3,
    // iOS
    shadowColor: "rgba(0,0,0,0.16)",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6
  },
  buttonText: {
    color: "#848484",
    fontSize: 20,
    fontFamily: "sans-serif-light"
  }
});

type Props = {
  route: RouteProp<NavStackParamList, "category">;
};

const CategoryPage: FunctionComponent<Props> = ({ route }) => {
  const {
    params: { category }
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
          .map(item => item.message);

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
      <TouchableOpacity onPress={pickRandomMessage} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.suggestion}>Have a suggestion?</Text>
    </View>
  );
};

export default CategoryPage;
