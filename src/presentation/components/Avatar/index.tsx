import { Image, TouchableOpacity } from "react-native";
import { AvatarProps } from "./types";
import { useMemo } from "react";
import { styles } from "./styles";

export const Avatar = ({ border = false, size = "medium", uri, alt, ...rest }: AvatarProps) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "small":
        return styles.small;
      case "medium":
        return styles.medium;
      case "large":
        return styles.large;
      default:
        return styles.medium;
    }
  }, [size]); 
  
  return (
    <TouchableOpacity {...rest} activeOpacity={0.4}>
      <Image
        style={[
          styles.avatar,
          sizeStyle,
          border && styles.border,
        ]}
        source={{ uri }}
        alt={alt}
      />
    </TouchableOpacity>
  );
}