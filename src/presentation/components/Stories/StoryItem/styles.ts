import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    
  },
  iconContainer: {
    backgroundColor: theme.colors.white,
    padding: 4,
    borderRadius: 50,
    position: "absolute",
    top: 4,
    left: 4,
  },
  emoji: {
    fontSize: 12,
    color: theme.colors.black,
  },
});