import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Page from "../components/Page";
import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../data/categories";
import { NavStackParamList } from "../types";

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginBottom: 15,
    fontFamily: "sans-serif-light",
    color: "#5A5A5A",
  },
});

type Props = {
  navigation: StackNavigationProp<NavStackParamList, "home">;
};
const StartPage: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <Page scrollable padStatusBar style={{ paddingTop: 50 }}>
      <Text style={styles.header}>Choose an occasion</Text>
      {CATEGORIES.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onPress={() => navigation.navigate("category", { category })}
        />
      ))}
    </Page>
  );
};

export default StartPage;
