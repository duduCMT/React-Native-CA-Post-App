import { Pressable, TouchableOpacity } from "react-native";

import { Text } from "@/presentation/components/Text";

import { TextButtonProps } from "./types";
import { useMemo } from "react";
import { styles } from "./styles";

export const TextButton = ({ children, color = "dark", weight = "medium", ...rest }: TextButtonProps) => {
  const textColor = useMemo(() => color === "dark" ? styles.darkText : styles.lightText , [color])
  
  return (
    <Pressable {...rest}>
      <Text style={[styles.text, textColor]} weight={weight}>{children}</Text>
    </Pressable>
  )
}