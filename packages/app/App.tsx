import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartPage from "./src/pages/StartPage";
import CategoryPage from "./src/pages/CategoryPage";
import CategoryCard from "./src/components/CategoryCard";

const Stack = createStackNavigator<NavStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={StartPage} />
        <Stack.Screen name="category" component={CategoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
