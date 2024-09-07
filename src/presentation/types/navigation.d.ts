import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ExpoMaterialIconNameSetup } from "@/presentation/components/ExpoMaterialIcons/types";

interface CustomOptions extends BottomTabNavigationOptions {
  icon: ExpoMaterialIconNameSetup;
};