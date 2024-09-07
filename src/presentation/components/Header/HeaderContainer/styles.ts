import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.paddings.screen.horizontal,
    paddingVertical: theme.paddings.screen.vertical,
    width: "100%",
  },
});