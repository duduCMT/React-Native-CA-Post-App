import { View } from "react-native"
import { styles } from "./styles"
import { HeaderButton } from "@/presentation/components/HeaderButton"
import { Text } from "@/presentation/components/Text"


export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <HeaderButton icon={{ pack: "material", name: "notifications" }} title="3" containerType="rectangle" />
      <HeaderButton icon={{ pack: "material-community", name: "chat-processing" }} tintType="light" />
    </View>
  )
}