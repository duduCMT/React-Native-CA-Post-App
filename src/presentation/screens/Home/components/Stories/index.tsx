import { useState } from "react";
import { Text, View } from "react-native";
import { TextButton } from "@/presentation/components/Buttons/TextButton";

import { FilterSelection } from "./types";
import { styles } from "./styles";

export const Stories = () => {
  const [filterSelection, setFilterSelection] = useState<FilterSelection>("followers");

  const handleFilterSelection = (selection: FilterSelection) => {
    setFilterSelection(selection);
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TextButton 
          onPress={() => handleFilterSelection("followers")}
          weight={filterSelection === "followers" ? "medium" : "regular"}
          color={filterSelection === "followers" ? "dark" : "light"}
        >
          Seguidores
        </TextButton>
        <TextButton 
          onPress={() => handleFilterSelection("discover")}
          weight={filterSelection === "discover" ? "medium" : "regular"}
          color={filterSelection === "discover" ? "dark" : "light"}
        >
          Discover
        </TextButton>
      </View>
    </View>
  )
}