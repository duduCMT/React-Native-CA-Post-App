import { Text as RNText } from "react-native";

import { styles } from "./styles";
import { TextProps } from "./types";
import { useMemo } from "react";

export const Text = ({  weight, children, style = {}, ...rest }: TextProps) => {
  const textWeight = useMemo(() => {
    switch (weight) {
      case "regular":
        return styles.regular;
      case "medium":
        return styles.medium;
      case "bold":
        return styles.bold;
      default:
        return styles.regular;
    }
  }, [weight])
  
  return (
    <RNText style={[textWeight, style]} {...rest}>
      {children}
    </RNText>
  );
};