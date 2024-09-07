import { TouchableOpacityProps } from "react-native";
import { ExpoMaterialIconNameSetup } from "../ExpoMaterialIcons/types";

type HeaderButtonSetupProps = {
  icon: ExpoMaterialIconNameSetup;
  title?: string;
} | {
  icon?: ExpoMaterialIconNameSetup;
  title: string;  
} | {
  icon: ExpoMaterialIconNameSetup;
  title: string;  
}

export type HeaderButtonProps = Omit<TouchableOpacityProps, "activeOpacity"> & HeaderButtonSetupProps & {
  tintType?: "light" | "dark";
  containerType?: "circle" | "rectangle";
};