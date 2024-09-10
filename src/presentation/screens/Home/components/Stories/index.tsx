import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { TextButton } from "@/presentation/components/Buttons/TextButton";

import { FilterSelection, StoriesProps } from "./types";
import { styles } from "./styles";
import { StoryItem } from "@/presentation/components/Stories/StoryItem";
import { AddStoryButton } from "@/presentation/components/Stories/AddStoryButton";
import { StoryItemLoading } from "@/presentation/components/Stories/StoryItem/loading";

export const Stories = ({ stories, filterSelection, onChangeFilter }: StoriesProps) => {
  const handleFilterSelection = (selection: FilterSelection) => {
    onChangeFilter(selection);
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

      {
        stories.status === "loading" ? (
          <FlatList 
            data={Array.from({ length: 5 }).map((_, index) => ({ id: index }))}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContentStyle}
            ListHeaderComponent={() => <AddStoryButton />}
            renderItem={({ item }) => (
              <StoryItemLoading key={item.id} />
            )}
          />
        ) : null 
      }
        
      { 
        stories.status === "success" && stories.data ? (
          <FlatList 
            data={stories.data}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContentStyle}
            ListHeaderComponent={() => <AddStoryButton />}
            renderItem={({ item }) => (
              <StoryItem icon={item.icon} id={item.id} image={item.image} />
            )}
          />
        ) : null
      }
    </View>
  )
}