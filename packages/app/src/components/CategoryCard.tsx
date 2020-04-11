import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import { Category } from "../data/categories";

const styles = StyleSheet.create({
  container: {
    height: 160,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingBottom: 17,

    borderColor: "#EAEAEA",
    backgroundColor: "white",
    shadowColor: "rgba(0,0,0,0.16)",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  text: {
    fontSize: 40,
    fontFamily: "sans-serif-thin",
    color: "#5A5A5A",
    marginTop: "auto",
  },
  image: {
    marginLeft: "auto",
    marginRight: 18,
    marginTop: 10,
    height: 140,
    minWidth: 100,
    resizeMode: "contain",
  },
});

const CategoryCard: FunctionComponent<{
  category: Category;
  onPress: () => void;
}> = ({ category, onPress }) => {
  return (
    <TouchableNativeFeedback>
      <View style={[styles.container]} onTouchEnd={onPress}>
        <Image style={styles.image} source={category.image} />
        <Text style={styles.text}>{category.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CategoryCard;
