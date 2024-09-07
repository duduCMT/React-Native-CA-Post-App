import { TouchableOpacityProps } from "react-native";

export type AvatarSize = "small" | "medium" | "large";

export type AvatarProps = Omit<TouchableOpacityProps, "activeOpacity"> & {
  size?: AvatarSize;
  uri: string;
  alt?: string;
  border?: boolean;
}