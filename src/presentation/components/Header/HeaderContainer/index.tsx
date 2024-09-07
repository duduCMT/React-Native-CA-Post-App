import { View } from "react-native";
import { HeaderContainerProps } from "./types";
import { styles } from "./styles";

export const HeaderContainer = ({ children, style = {}, ...rest }: HeaderContainerProps) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};