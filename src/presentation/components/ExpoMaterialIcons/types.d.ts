import { ComponentProps } from "react";
import { StyleProp, TextStyle } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
export type MaterialCommunityIconsName = keyof typeof MaterialCommunityIcons.glyphMap;

export type ExpoMaterialIconNameSetup = {
  pack: "material";
  name: MaterialIconName;
} | {
  pack: "material-community";
  name: MaterialCommunityIconsName;
}

export type ExpoMaterialIconProps = ExpoMaterialIconNameSetup & {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};