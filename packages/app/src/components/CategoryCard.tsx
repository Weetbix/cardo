import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bbb"
  },
  text: {
    fontSize: 60
  }
});

const CategoryCard: FunctionComponent<{
  name: string;
  onPress: () => void;
}> = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={onPress}>
        {name}
      </Text>
    </View>
  );
};

export default CategoryCard;
