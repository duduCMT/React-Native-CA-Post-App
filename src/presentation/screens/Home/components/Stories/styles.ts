import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 16,
    marginLeft: theme.paddings.screen.horizontal,
    paddingLeft: 2,
  },
  listContentStyle: {
    paddingHorizontal: theme.paddings.screen.horizontal,
    gap: 8,
  }
});