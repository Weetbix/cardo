import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import Page from "../../components/Page";
import Button from "../../components/Button";
const splash = require("./images/splash.png");

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  centerContent: {
    textAlign: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    marginTop: 28,
  },
  subHeader: {
    fontSize: 20,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    marginTop: 15,
  },
});

type Props = {
  navigation: StackNavigationProp<NavStackParamList, "home">;
};

const ErrorPage: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <Page centered style={styles.container}>
      <View />
      <View style={styles.centerContent}>
        <Image source={splash} />
        <Text style={styles.header}>Oh no!</Text>
        <Text style={styles.subHeader}>
          Something went wrong. Go back to try again.
        </Text>
      </View>
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </Page>
  );
};

export default ErrorPage;
