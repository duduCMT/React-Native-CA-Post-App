import { StyleSheet } from "react-native";
import { STORY_BORDER_RADIUS, STORY_HEIGHT, STORY_WIDTH } from "./constants";

export const storiesStyles = StyleSheet.create({
  container: {
    height: STORY_HEIGHT,
    width: STORY_WIDTH,
    borderRadius: STORY_BORDER_RADIUS,
  },
});