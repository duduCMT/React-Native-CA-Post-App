import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";
import { TabBarConstants } from "../TabBar/constants";

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
    left: TabBarConstants.SELECT_INDICATOR_POSITION,
    height: 3,
    width: 3,
    borderRadius: 999,
  },
  regularButton: {
    padding: 16,
  },
  primaryButton: {
    width: TabBarConstants.TAB_BAR_SIZE,
    height: TabBarConstants.TAB_BAR_SIZE,
    backgroundColor: theme.colors.primary[500],
    borderRadius: 999,
    elevation: 3,
    shadowColor: theme.colors.neutral[200],
  },
});