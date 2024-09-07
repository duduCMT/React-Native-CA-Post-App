import { LinearGradient } from "expo-linear-gradient"
import { Text } from "react-native"
import { styles } from "./styles"
import { theme } from "@/presentation/theme"

export const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[theme.colors.primary[200], theme.colors.white]}
      locations={[ 0.1, 0.4 ]}
      style={styles.container}
    >
      <Text>Sign in with Facebook</Text>
    </LinearGradient>
  )
}