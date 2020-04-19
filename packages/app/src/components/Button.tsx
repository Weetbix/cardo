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
  buttonDisabled: {
    // match defaults for touchable opacity
    opacity: 0.2,
  },
  buttonText: {
    color: "#5A5A5A",
    fontSize: 20,
    fontFamily: "sans-serif-light",
  },
});

const Button: FunctionComponent<{
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}> = ({ onPress, disabled, children, style }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonDisabled, style]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
