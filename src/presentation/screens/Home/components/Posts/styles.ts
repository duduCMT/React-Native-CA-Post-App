import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.paddings.screen.horizontal,
    gap: 8,
  },
  title: {
    fontSize: 14,
    color: theme.colors.neutral[200],
    paddingLeft: 2,
  },
  posts: {
    flex: 1,
    gap: 16,
  }
});