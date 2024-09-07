import { theme } from "@/presentation/theme"
import { ActivityIndicator, View } from "react-native"
import { styles } from "./styles"

export const PostsLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary[600]} />
    </View>
  )
}