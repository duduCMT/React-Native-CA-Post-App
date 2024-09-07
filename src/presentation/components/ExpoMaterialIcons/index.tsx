import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ExpoMaterialIconProps } from "./types";

export const ExpoMaterialIcons = ({ name, pack, ...rest }: ExpoMaterialIconProps) => {
  if(pack === "material-community") {
    return <MaterialCommunityIcons name={name} {...rest} />
  }

  if(pack === "material") {
    return <MaterialIcons name={name} {...rest} />
  }

  return null;
};