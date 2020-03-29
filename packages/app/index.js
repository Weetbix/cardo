import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import API from "@aws-amplify/api";
import amplifyConfig from "./aws-exports";

API.configure(amplifyConfig);
AppRegistry.registerComponent(appName, () => App);
