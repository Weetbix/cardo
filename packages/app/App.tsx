import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions
} from "@react-navigation/stack";
import StartPage from "./src/pages/StartPage";
import CategoryPage from "./src/pages/CategoryPage";

const Stack = createStackNavigator<NavStackParamList>();

const headerStyles: StackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    fontWeight: "normal",
    fontFamily: "sans-serif-light"
  },
  headerTitleAlign: "center",
  headerBackImage: () => (
    <Ionicons name="ios-arrow-back" size={20} style={{ marginLeft: 10 }} />
  )
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
          name="category"
          component={CategoryPage}
          options={({ route }) => ({
            title: route.params.title
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
