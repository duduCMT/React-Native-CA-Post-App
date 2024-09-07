import { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";

import { theme } from "@/presentation/theme";
import { ExpoMaterialIcons } from "@/presentation/components/ExpoMaterialIcons";
import { Text } from "@/presentation/components/Text";

import { styles } from "./styles";
import { HeaderButtonProps } from "./types";


export const HeaderButton = ({ icon, title, tintType = "dark", containerType = "circle", ...rest }: HeaderButtonProps) => {

  const contentColor = useMemo(() => tintType === "dark" ? theme.colors.neutral[500] : theme.colors.neutral[200], [tintType]);
  const containerTypeStyle = useMemo(() => containerType === "circle" ? styles.circleContainer : styles.rectangleContainer, [containerType]);

  return (
    <TouchableOpacity style={[styles.container, containerTypeStyle]} activeOpacity={0.4} {...rest}>
      {icon ? <ExpoMaterialIcons {...icon} size={24} color={contentColor} /> : null}
      {title ? <Text style={[styles.title, { color: contentColor } ]} weight="medium">{title}</Text> : null}
    </TouchableOpacity>
  ) 
}