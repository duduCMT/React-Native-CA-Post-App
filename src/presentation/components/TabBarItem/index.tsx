import { Pressable, View } from "react-native"
import { TabBarItemProps } from "./types"
import { ExpoMaterialIcons } from "../ExpoMaterialIcons"
import { theme } from "@/presentation/theme"
import { styles } from "./styles"
import { useMemo } from "react"
import { TabBarConstants } from "../TabBar/constants"

export const TabBarItem = ({ icon, isFocused, type = "regular", ...rest }: TabBarItemProps) => {
  const containerStyle = useMemo(() => [styles.container, type === "regular" ? styles.regularButton : styles.primaryButton], [type])
  
  const iconSize = useMemo(() => type === "regular" ? TabBarConstants.REGULAR_ICON_SIZE : TabBarConstants.PRIMARY_ICON_SIZE, [type])

  const iconColor = useMemo(() => {
    if(isFocused) {
      return type === "regular" ? theme.colors.neutral[500] : theme.colors.neutral[600]
    }
    return type === "regular" ? theme.colors.neutral[200] : theme.colors.neutral[500]
  }, [isFocused, type])

  return (
    <Pressable style={[styles.container, containerStyle]} {...rest}>
      <ExpoMaterialIcons {...icon} size={iconSize} color={iconColor} />
      {isFocused ? <View style={styles.focusedIndicator} /> : null}
    </Pressable>
  )
}