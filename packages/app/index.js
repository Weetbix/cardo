import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import API from "@aws-amplify/api";
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";

import amplifyConfig from "./aws-exports";

// Amplify.configure(amplifyConfig);
API.configure(amplifyConfig);

// console.warn("begin");
// Auth.currentCredentials();
//   .then(d => console.log("data: ", d))
//   .catch(e => console.log("err2or: ", e));

AppRegistry.registerComponent(appName, () => App);
