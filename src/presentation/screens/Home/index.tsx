import { LinearGradient } from "expo-linear-gradient"
import { ScrollView, Text, View } from "react-native"

import { theme } from "@/presentation/theme"

import { HomeHeader } from "./components/HomeHeader"
import { SafeAreaView } from "react-native-safe-area-context"
import { Stories } from "./components/Stories"
import { Posts } from "./components/Posts"

import { styles } from "./styles"
import { HomeProps } from "./types"

export const HomeScreen = ({ postListUseCase }: HomeProps) => {
  return (
    <LinearGradient
      colors={[theme.colors.primary[100], theme.colors.primary[1], theme.colors.white]}
      locations={[ 0.1, 0.4, 1 ]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <HomeHeader />
          <View style={styles.content}>
            <Stories />
            <Posts postListUseCase={postListUseCase} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}