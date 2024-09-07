import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ExpoMaterialIconProps } from "./types";

export const ExpoMaterialIcons = ({ name, pack, style = {}, ...rest }: ExpoMaterialIconProps) => {
  if(pack === "material-community") {
    return <MaterialCommunityIcons testID="material-community-icon" name={name} style={style} {...rest} />
  }

  if(pack === "material") {
    return <MaterialIcons name={name} style={style} {...rest} />;
  }

  return <MaterialIcons name={name} style={style} {...rest} />;
};