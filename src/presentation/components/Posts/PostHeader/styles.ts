import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  info: {
    gap: 2,
  },
  name: {
    fontSize: 14,
    color: theme.colors.neutral[500],
  },
  time: {
    fontSize: 12,
    lineHeight: 12,
    color: theme.colors.neutral[200],
  },
});