import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavStackParamList } from "../../types";
import Page from "../../components/Page";
import Button from "../../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
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
  navigation: StackNavigationProp<NavStackParamList, "suggestionsuccess">;
};

const SuccessfulSubmissionPage: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <Page centered style={styles.container}>
      <View />
      <View style={styles.centerContent}>
        <Image source={splash} />
        <Text style={styles.header}>Thanks!</Text>
        <Text style={styles.subHeader}>
          Your suggestion will appear after it is approved.
        </Text>
      </View>
      <Button onPress={() => navigation.navigate("home")}>Back to Home</Button>
    </Page>
  );
};

export default SuccessfulSubmissionPage;
