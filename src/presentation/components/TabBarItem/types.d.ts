import { ReactNode } from "react";
import { PressableProps } from "react-native";
import { ExpoMaterialIconNameSetup } from "../ExpoMaterialIcons/types";

export type TabBarItemProps = PressableProps & {
  icon: ExpoMaterialIconNameSetup;
  isFocused?: boolean;
  type?: "regular" | "primary";
}