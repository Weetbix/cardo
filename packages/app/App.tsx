import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartPage from "./src/pages/StartPage";
import CategoryPage from "./src/pages/CategoryPage";

const Stack = createStackNavigator<NavStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
