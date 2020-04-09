import React, { FunctionComponent } from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

const Page: FunctionComponent<{
  style?: StyleProp<ViewStyle>;
  centered?: boolean;
}> = ({ style, centered, children }) => {
  return (
    <View
      style={[styles.container, centered && { alignItems: "center" }, style]}
    >
      {children}
    </View>
  );
};

export default Page;
