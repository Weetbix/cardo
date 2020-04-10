import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { NavStackParamList } from "../../types";
import Page from "../../components/Page";
import Button from "../../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
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
    marginLeft: 40,
    marginRight: 40,
  },
});

type TemplateProps = {
  header: string;
  subHeader: string;
  image?: ImageSourcePropType;
  onButtonPress: () => void;
  buttonText?: string;
};
export const SplashPageTemplate: FunctionComponent<TemplateProps> = ({
  header,
  subHeader,
  onButtonPress,
  image = splash,
  buttonText = "Back to Home",
}) => {
  return (
    <Page centered style={styles.container}>
      <View />
      <View style={styles.centerContent}>
        <Image source={image} />
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.subHeader}>{subHeader}</Text>
      </View>
      <Button onPress={onButtonPress}>{buttonText}</Button>
    </Page>
  );
};

type Props = {
  navigation: StackNavigationProp<NavStackParamList, "splash">;
  route: RouteProp<NavStackParamList, "splash">;
};
const SplashPage: FunctionComponent<Props> = ({ navigation, route }) => {
  return (
    <SplashPageTemplate
      header={route.params.header}
      subHeader={route.params.subHeader}
      onButtonPress={() => navigation.navigate("home")}
    />
  );
};

export default SplashPage;
