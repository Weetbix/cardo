import React, { FunctionComponent } from "react";
import { NavStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { SplashPageTemplate } from "../SplashPage";
const splash = require("./images/splash.png");

type Props = {
  navigation: StackNavigationProp<NavStackParamList, "error">;
};
const ErrorPage: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <SplashPageTemplate
      header="Oh no!"
      subHeader="Something went wrong. Go back to try again."
      buttonText="Back"
      onButtonPress={() => navigation.goBack()}
      image={splash}
    />
  );
};

export default ErrorPage;
