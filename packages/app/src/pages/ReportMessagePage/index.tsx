import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavStackParamList } from "../../types";
import Page from "../../components/Page";
import Button from "../../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
const splash = require("./images/splash.png");

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  centerContent: {
    alignContent: "stretch",
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  subHeader: {
    fontSize: 20,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    marginTop: 30,
    marginLeft: 45,
    marginRight: 45,
  },
  button: {
    marginBottom: 20,
  },
});

type Props = {
  navigation: StackNavigationProp<NavStackParamList, "reportmessage">;
};

const ReportMessagePage: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <Page centered style={styles.container}>
      <View style={styles.centerContent}>
        <Image style={styles.image} source={splash} />
        <Text style={styles.subHeader}>
          Why are you reporting this message?
        </Text>
      </View>
      <View style={styles.centerContent}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          It's spam
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          It's inappropriate
        </Button>
        <Button onPress={() => navigation.navigate("home")}>Other</Button>
      </View>
    </Page>
  );
};

export default ReportMessagePage;
