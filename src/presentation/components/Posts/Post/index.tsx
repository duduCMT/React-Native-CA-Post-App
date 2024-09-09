import { View } from "react-native";

import { Text } from "@/presentation/components/Text";

import { PostProps } from "./types";
import { styles } from "./styles";
import { PostHeader } from "../PostHeader";
import { PostImage } from "../PostImage";
import { POST_COMPONENT_TEST_ID } from "./constants";

export const Post = ({ body, time, userAvatar, userName, image }: PostProps) => {
  return (
    <View style={styles.container} testID={POST_COMPONENT_TEST_ID}>
      <PostHeader avatar={userAvatar} name={userName} time={time} />
      <Text style={styles.text}>
        {body}
      </Text>
      {
        image && (
          <PostImage 
            uri={image}
          />
        )
      }
    </View>
  )
}