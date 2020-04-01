import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
const splash = require("./images/splash.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    paddingLeft: 45,
    paddingRight: 45,
    justifyContent: "space-between"
  },
  centerContent: {
    textAlign: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 25,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    marginTop: 28
  },
  subHeader: {
    fontSize: 20,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    marginTop: 15
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
    shadowRadius: 6
  },
  buttonText: {
    color: "#848484",
    fontSize: 20,
    fontFamily: "sans-serif-light"
  }
});

type Props = {
  navigation: StackNavigationProp<NavStackParamList, "home">;
};

const ErrorPage: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View />
      <View style={styles.centerContent}>
        <Image source={splash} />
        <Text style={styles.header}>Oh no!</Text>
        <Text style={styles.subHeader}>
          Something went wrong. Go back to try again.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorPage;
