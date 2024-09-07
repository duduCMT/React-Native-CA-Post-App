import { Image, View } from "react-native";

import { styles } from "./styles";
import { StoryItemProps } from "./types";

import { Text } from "@/presentation/components/Text";
import { storiesStyles } from "../styles";

export const StoryItem = ({ image, icon }: StoryItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={storiesStyles.container} />
      <View style={styles.iconContainer}>
        <Text style={styles.emoji}>
          {icon}
        </Text>
      </View>
    </View>
  )
}