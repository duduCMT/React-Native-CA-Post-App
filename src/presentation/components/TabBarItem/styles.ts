import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  focusedIndicator: {
    backgroundColor: theme.colors.primary[500],
    position: "absolute",
    bottom: 10,
    left: 16 + 12 - 1,
    height: 3,
    width: 3,
    borderRadius: 999,
  },
  regularButton: {
    padding: 16,
  },
  primaryButton: {
    width: 16 + 24 + 16,
    height: 16 + 24 + 16,
    backgroundColor: theme.colors.primary[500],
    borderRadius: 999,
    elevation: 2,
    shadowColor: theme.colors.neutral[200],
  },
});