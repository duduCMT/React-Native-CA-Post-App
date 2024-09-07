import { View } from "react-native"
import { Avatar } from "@/presentation/components/Avatar"

import { Text } from "@/presentation/components/Text";
import { storiesStyles } from "@/presentation/components/Stories/styles";
import { ExpoMaterialIcons } from "@/presentation/components/ExpoMaterialIcons";
import { theme } from "@/presentation/theme";

import { styles } from "./styles";
;

export const AddStoryButton = () => {
  return (
    <View style={[storiesStyles.container, styles.container]}>
      <View style={styles.content}>
        <Avatar uri="https://github.com/duduCMT.png" size="small" />
        <View style={styles.icon}>
          <ExpoMaterialIcons pack="material" name="add" color={theme.colors.neutral[200]} size={14} />
        </View>
      </View>
      <Text style={styles.text}>
        Seu Story
      </Text>
    </View>
  );
};