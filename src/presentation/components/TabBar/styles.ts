import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

import { Dimensions } from 'react-native';
import { TabBarConstants } from "./constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.none,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    gap: 8,
    marginBottom: TabBarConstants.TAB_BAR_PADDING_BOTTOM,
    marginHorizontal: 16,
  },
  main: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 999,
    paddingHorizontal: 8,
    elevation: 3,
    shadowColor: theme.colors.neutral[200],
  },
  addButtonArea: {
    
  }
});