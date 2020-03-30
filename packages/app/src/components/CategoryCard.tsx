import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image
} from "react-native";
import { Category } from "../data/categories";

const styles = StyleSheet.create({
  container: {
    height: 160,
    borderRadius: 10,
    marginBottom: 15,
    padding: 25
  },
  text: {
    fontSize: 40,
    fontFamily: "sans-serif-light",
    color: "#fff",
    marginTop: "auto"
  },
  image: {
    position: "absolute",
    right: 18,
    bottom: 0
  }
});

const CategoryCard: FunctionComponent<{
  category: Category;
  onPress: () => void;
}> = ({ category, onPress }) => {
  return (
    <TouchableNativeFeedback>
      <View
        style={[styles.container, { backgroundColor: category.color }]}
        onTouchEnd={onPress}
      >
        <Image style={styles.image} source={category.image} />
        <Text style={styles.text}>{category.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CategoryCard;
