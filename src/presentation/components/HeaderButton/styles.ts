import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 99,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  circleContainer: {
    padding: 10,
  },
  rectangleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
  }
});