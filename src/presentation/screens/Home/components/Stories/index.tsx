import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { TextButton } from "@/presentation/components/Buttons/TextButton";

import { FilterSelection } from "./types";
import { styles } from "./styles";
import { STORIES } from "./mock";
import { StoryItem } from "@/presentation/components/Stories/StoryItem";
import { AddStoryButton } from "@/presentation/components/Stories/AddStoryButton";

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
      <FlatList 
        data={STORIES}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentStyle}
        ListHeaderComponent={() => <AddStoryButton />}
        renderItem={({ item }) => (
          <StoryItem icon={item.icon} id={item.id} image={item.image} />
        )}
      />
    </View>
  )
}