import React, { FunctionComponent } from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
  padStatusBar: {
    marginTop: Constants.statusBarHeight,
  },
});

const Page: FunctionComponent<{
  style?: StyleProp<ViewStyle>;
  centered?: boolean;
  scrollable?: boolean;
  padStatusBar?: boolean;
}> = ({ style, centered, scrollable, padStatusBar, children }) => {
  return scrollable ? (
    <ScrollView
      style={[styles.container, padStatusBar && styles.padStatusBar]}
      contentContainerStyle={[
        styles.contentContainer,
        centered && { alignItems: "center" },
        style,
      ]}
    >
      {children}
    </ScrollView>
  ) : (
    <View
      style={[
        styles.container,
        styles.contentContainer,
        padStatusBar && styles.padStatusBar,
        centered && { alignItems: "center" },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Page;
