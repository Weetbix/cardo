import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AEC943",
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
  }
});

const CategoryCard: FunctionComponent<{
  name: string;
  onPress: () => void;
}> = ({ name, onPress }) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.container} onTouchEnd={onPress}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CategoryCard;
