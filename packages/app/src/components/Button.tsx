import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 50,
    minWidth: 230,

    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",

    // android:
    elevation: 3,
    // iOS
    shadowColor: "rgba(0,0,0,0.16)",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  buttonText: {
    color: "#5A5A5A",
    fontSize: 20,
    fontFamily: "sans-serif-light",
  },
});

const Button: FunctionComponent<{
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}> = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
