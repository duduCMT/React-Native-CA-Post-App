import { LinearGradient } from "expo-linear-gradient"
import { Text } from "react-native"
import { styles } from "./styles"
import { theme } from "@/presentation/theme"
import { HomeHeader } from "./components/HomeHeader"
import { SafeAreaView } from "react-native-safe-area-context"
import { Stories } from "./components/Stories"

export const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[theme.colors.primary[200], theme.colors.white]}
      locations={[ 0.1, 0.4 ]}
      style={styles.container}
      >
      <SafeAreaView style={{ flex: 1 }}>
        <HomeHeader />
        <Stories />
      </SafeAreaView>
    </LinearGradient>
  )
}