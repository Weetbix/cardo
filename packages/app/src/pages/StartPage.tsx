import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../data/categories";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50
  },
  header: {
    fontSize: 25,
    marginBottom: 15,
    fontFamily: "sans-serif-light"
  }
});

type Props = {
  navigation: StackNavigationProp<NavStackParamList, "home">;
};
const StartPage: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose an occasion</Text>
      {CATEGORIES.map(category => (
        <CategoryCard
          key={category.id}
          category={category}
          onPress={() => navigation.navigate("category", { category })}
        />
      ))}
    </View>
  );
};

export default StartPage;
