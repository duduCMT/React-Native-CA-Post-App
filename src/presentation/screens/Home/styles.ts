import { TabBarConstants } from "@/presentation/components/TabBar/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 24,
  },
  scrollViewContent: {
    paddingBottom: TabBarConstants.ALL_TAB_BAR_HEIGHT + 16,
    gap: 4,
  }
});