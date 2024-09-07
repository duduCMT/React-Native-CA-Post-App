import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  lightText: {
    color: theme.colors.neutral[200],
  },
  darkText: {
    color: theme.colors.neutral[500],
  },
});