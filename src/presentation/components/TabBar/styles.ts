import { theme } from "@/presentation/theme";
import { StyleSheet } from "react-native";

import { Dimensions } from 'react-native';

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
    marginBottom: 16,
    marginHorizontal: 16,
  },
  main: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 999,
    paddingHorizontal: 8,
    elevation: 2,
    shadowColor: theme.colors.neutral[200],
  },
  addButtonArea: {
    
  }
});