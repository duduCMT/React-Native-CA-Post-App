import { TouchableOpacity, View } from "react-native"
import { HeaderButtonProps } from "./types"
import { ExpoMaterialIcons } from "../ExpoMaterialIcons"
import { useMemo } from "react"
import { theme } from "@/presentation/theme"
import { Text } from "@/presentation/components/Text"
import { styles } from "./styles"


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