import { StyleSheet } from "react-native";

import { theme } from "@/presentation/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.white,
    padding: 12,
    borderRadius: 16,
    gap: 12,
  },
  text: {
    fontSize: 12,
    lineHeight: 12 * 1.3,
    color: theme.colors.neutral[800],
  },
});