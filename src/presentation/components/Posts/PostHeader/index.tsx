import { View } from "react-native";

import { Avatar } from "@/presentation/components/Avatar";
import { Text } from "@/presentation/components/Text";

import { PostHeaderProps } from "./types";
import { styles } from "./styles";

export const PostHeader = ({ avatar, name, time }: PostHeaderProps) => {
  return (
    <View style={styles.container}>
      <Avatar size="xSmall" uri={avatar} />
      <View style={styles.info}>
        <Text style={styles.name} weight="medium">
          {name}
        </Text>
        <Text style={styles.time}>
          {time}
        </Text>
      </View>
    </View>
  )
}