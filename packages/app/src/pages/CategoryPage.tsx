import React, {
  FunctionComponent,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";
import {
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Amplify from "aws-amplify";
import API from "@aws-amplify/api";
import { RouteProp } from "@react-navigation/native";
import GestureRecognizer from "react-native-swipe-gestures";
import { shuffle } from "lodash";
import { isFilled } from "ts-is-present";
import { GetCategoryQuery } from "@cardo/backend/src/API";
import { NavStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import Page from "../components/Page";
import Button from "../components/Button";

import amplifyConfig from "../../aws-exports";
Amplify.configure(amplifyConfig);

const styles = StyleSheet.create({
  messageContent: {
    marginTop: "10%",
    marginBottom: "auto",
  },
  message: {
    fontSize: 25,
    fontFamily: "sans-serif-light",
    color: "#5A5A5A",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    marginTop: "10%",
    maxHeight: "20%",
    resizeMode: "contain",
  },
  suggestion: {
    color: "#7DC6ED",
    fontFamily: "sans-serif-light",
    fontSize: 16,
    marginBottom: 5,
  },
});

type Message = {
  text: string;
  id: string;
};

type Props = {
  route: RouteProp<NavStackParamList, "category">;
  navigation: StackNavigationProp<NavStackParamList, "category">;
};

const CategoryPage: FunctionComponent<Props> = ({ route, navigation }) => {
  const {
    params: { category },
  } = route;

  const [messages, setMessages] = useState<Message[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const message = useMemo(
    () => (messages.length ? messages[messageIndex] : null),
    [messageIndex, messages]
  );

  // add the report button to the top bar
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Feather
          name="flag"
          size={20}
          onPress={() =>
            message?.id &&
            navigation.navigate("reportmessage", { messageId: message.id })
          }
          style={{ marginRight: 20 }}
        />
      ),
    });
  }, [navigation, message]);

  // Fetch the message data
  useEffect(() => {
    async function fetchMessages() {
      const messageData: {
        data: GetCategoryQuery;
      } = await API.graphql({
        query: `query getApprovedMessages($id: ID!) {
          getCategory(id: $id) {
            messages(limit: 1000, filter: { approved: { eq: true } }) {
              items {
                message
                id
              }
            }
          }
        }`,
        variables: { id: category.id },
      });

      if (messageData.data.getCategory?.messages?.items?.length) {
        const fetchedMessages: Message[] = messageData.data.getCategory.messages.items
          .filter(isFilled)
          .map((item) => ({ text: item.message, id: item.id }));

        setMessages(shuffle(fetchedMessages));
      }
    }

    fetchMessages();
  }, []);

  // Choose the next message, or if at the end, reset and
  // reshuffle all the messages so we avoid duplicates.
  const nextMessage = () => {
    if (messageIndex + 1 > messages.length - 1) {
      // Always put the current message at the end of the new message
      // list otherwise we may possibly select it again
      setMessages([
        ...shuffle(messages.slice(0, messages.length - 1)),
        message ? message : messages[messages.length - 1],
      ]);
      setMessageIndex(0);
    } else {
      setMessageIndex(messageIndex + 1);
    }
  };

  const previousMessage = () => {
    const index = messageIndex - 1;
    setMessageIndex(index >= 0 ? index : messages.length - 1);
  };

  // Fade message text in
  const [fadeText] = useState(new Animated.Value(0));
  useEffect(() => {
    fadeText.setValue(0);
    Animated.timing(fadeText, {
      toValue: 1,
      duration: 500,
    }).start();
  }, [message]);

  return (
    <Page centered>
      <Image style={styles.image} source={category.image} />
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeRight={previousMessage}
        onSwipeLeft={nextMessage}
      >
        <ScrollView style={styles.messageContent}>
          {message ? (
            <Animated.Text
              selectable
              style={[styles.message, { opacity: fadeText }]}
            >
              {message.text}
            </Animated.Text>
          ) : (
            <ActivityIndicator size="large" color="#DDDDDD" />
          )}
        </ScrollView>
      </GestureRecognizer>
      <Button onPress={nextMessage} style={{ marginBottom: 25, marginTop: 25 }}>
        Next
      </Button>
      <Text
        style={styles.suggestion}
        onPress={() => navigation.navigate("suggestion", { category })}
      >
        Have a suggestion?
      </Text>
    </Page>
  );
};

export default CategoryPage;
