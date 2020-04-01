import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavStackParamList } from "../../types";
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
  route: RouteProp<NavStackParamList, "suggestionsuccess">;
};

const SuccessfulSubmissionPage: FunctionComponent<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <View />
      <View style={styles.centerContent}>
        <Image source={splash} />
        <Text style={styles.header}>Thanks!</Text>
        <Text style={styles.subHeader}>
          Your suggestion will appear after it is approved.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessfulSubmissionPage;
