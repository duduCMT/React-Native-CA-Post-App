import { View } from "react-native"
import { styles } from "./styles"
import { Text } from "@/presentation/components/Text"
import { Header } from "@/presentation/components/Header"


export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Header.Container>
        <View style={styles.leftContent}>
          <Header.Button icon={{ pack: "material", name: "notifications" }} title="3" containerType="rectangle" />
          <Header.Button icon={{ pack: "material-community", name: "chat-processing" }} tintType="light" />
        </View>
      </Header.Container>
    </View>
  )
}