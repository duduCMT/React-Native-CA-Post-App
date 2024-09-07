import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  content: {
    alignItems: "center",
  },
  icon: {
    marginTop: -8,
    backgroundColor: theme.colors.primary[500],
    borderRadius: 50,
    borderWidth: 1,
    padding: 1,
    borderColor: theme.colors.white,
  },
  text: {
    fontSize: 10,
    color: theme.colors.neutral[200],
  },
});