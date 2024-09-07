import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatar: {
    borderRadius: 999, 
  },
  small: {
    width: 16 + 24,
    height: 16 + 24,
  }, 
  medium: {
    width: 24 + 24,
    height: 24 + 24,
  },
  large: {
    width: 32 + 24,
    height: 32 + 24,
  },
  border: {
    borderWidth: 2,
    borderColor: theme.colors.white,
  }
});