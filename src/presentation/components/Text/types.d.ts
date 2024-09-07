import { TextProps as RNTextProps } from "react-native";

export type TextWeight = "regular" | "medium" | "bold";

export type TextProps = RNTextProps & {
  weight?: TextWeight; 
};