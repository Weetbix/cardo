import React from "react";
import API from "@aws-amplify/api";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import StartPage from "./src/pages/StartPage";
import CategoryPage from "./src/pages/CategoryPage";
import AddSuggestionPage from "./src/pages/AddSuggestionPage";
import ReportMessagePage from "./src/pages/ReportMessagePage";
import SuccessfulSuggestionPage from "./src/pages/SuccessfulSubmissionPage";
import ErrorPage from "./src/pages/ErrorPage";

const Stack = createStackNavigator<NavStackParamList>();

import amplifyConfig from "./aws-exports.js";
API.configure(amplifyConfig);

const headerStyles: StackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontWeight: "normal",
    fontFamily: "sans-serif-light",
  },
  headerTitleAlign: "center",
  headerBackImage: () => (
    <Ionicons name="ios-arrow-back" size={20} style={{ marginLeft: 10 }} />
  ),
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerStyles}>
        <Stack.Screen
          name="home"
          component={StartPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="error"
          component={ErrorPage}
          options={{ title: "Error" }}
        />
        <Stack.Screen
          name="category"
          component={CategoryPage}
          options={({ route }) => ({
            title: route.params.category.name,
          })}
        />
        <Stack.Screen
          name="suggestion"
          component={AddSuggestionPage}
          options={({ route }) => ({
            title: route.params.category.name,
          })}
        />
        <Stack.Screen
          name="suggestionsuccess"
          component={SuccessfulSuggestionPage}
          options={({ route }) => ({
            title: route.params.category.name,
          })}
        />
        <Stack.Screen
          name="reportmessage"
          component={ReportMessagePage}
          options={{ title: "Report" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
