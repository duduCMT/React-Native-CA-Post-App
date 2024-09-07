import { Image } from "react-native";

import { PostImageProps } from "./types";
import { useEffect, useState } from "react";
import { styles } from "./styles";

export const PostImage = ({ uri }: PostImageProps) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if(uri) {
      Image.getSize(uri, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, [uri])

  return (
    <Image 
      source={{ uri }}
      style={
        [
          {aspectRatio},
          styles.container
        ]
      }
    />
  );
};