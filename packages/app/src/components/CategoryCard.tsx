import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bbb"
  }
});

const CategoryCard: FunctionComponent<{ name: string }> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export default CategoryCard;
