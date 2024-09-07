import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"
import { styles } from "./styles"
import { theme } from "@/presentation/theme"
import { HomeHeader } from "./components/HomeHeader"
import { SafeAreaView } from "react-native-safe-area-context"
import { Stories } from "./components/Stories"
import { Posts } from "./components/Posts"

export const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[theme.colors.primary[200], theme.colors.primary[1]]}
      locations={[ 0.1, 0.4 ]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <HomeHeader />
        <View style={styles.content}>
          <Stories />
          <Posts />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}